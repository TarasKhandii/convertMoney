import { Dispatch } from "react";
import { ConvertAction, ConvertActionTypes } from "../types/convertPageTypes";
import { getConvert } from "../../api/convertPageAPI";

export const fetchConvert = (from: string, to: string, sum: number) => {
  return async (dispatch: Dispatch<ConvertAction>) => {
    try {
      dispatch({ type: ConvertActionTypes.CONVERT__LOADING });
      const res = await getConvert(from, to, sum);
      dispatch({
        type: ConvertActionTypes.GET__CONVERT__SUCCESS,
        payload: res.data,
      });
      console.log("res", res.data);
    } catch (error) {
      console.log(error);
    }
  };
};
