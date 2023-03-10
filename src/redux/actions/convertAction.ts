import { Dispatch } from "react";
import { ConvertAction, ConvertActionTypes } from "../types/convertPageTypes";
import { getConvert } from "../../api/convertPageAPI";
import { getUserHistory, setUserHistory } from "../../utils/localStorage";

export const fetchConvert = (from: string, to: string, sum: string) => {
  const localStorage = getUserHistory();

  return async (dispatch: Dispatch<ConvertAction>) => {
    try {
      dispatch({ type: ConvertActionTypes.CONVERT__LOADING });
      const res = await getConvert(from, to, sum);
      dispatch({
        type: ConvertActionTypes.GET__CONVERT__SUCCESS,
        payload: res.data,
      });
      setUserHistory(
        localStorage.length ? [...localStorage, res.data] : [res.data]
      );
    } catch (error) {
      console.log(error);
    }
  };
};
