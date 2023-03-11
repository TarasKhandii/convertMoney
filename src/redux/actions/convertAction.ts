import { Dispatch } from "react";
import { ConvertAction, ConvertActionTypes } from "../types/convertPageTypes";
import { getConvert } from "../../api/convertPageAPI";
import { getUserHistory, setUserHistory } from "../../utils/localStorage";

export const fetchConvert = (from: string, to: string, sum: string) => {
  const localStorage = getUserHistory();

  return async (dispatch: Dispatch<ConvertAction>) => {
    try {
      dispatch({ type: ConvertActionTypes.CONVERT__LOADING, payload: true });

      const res = await getConvert(from, to, sum);

      const newHistory = localStorage.length
        ? [...localStorage, res.data]
        : [res.data];

      dispatch({
        type: ConvertActionTypes.GET__CONVERT__SUCCESS,
        payload: res.data,
      });

      dispatch({ type: ConvertActionTypes.CONVERT__LOADING, payload: false });

      setUserHistory(newHistory);
    } catch (error) {
      console.log(error);
    }
  };
};
