import { Dispatch } from "react";
import { getHistorical } from "../../api/historicalPageApi";
import {
  HistoricalAction,
  HistoricalActionTypes,
} from "../types/historicalPAgeTypes";

export const fetchHistorical = (date: string, base: string) => {
  return async (dispatch: Dispatch<HistoricalAction>) => {
    try {
      dispatch({
        type: HistoricalActionTypes.HISTORICAL__LOADING,
        payload: true,
      });

      const res = await getHistorical(date, base);
      console.log("ajsha", res.data);

      dispatch({
        type: HistoricalActionTypes.GET__HISTORICAL__SUCCESS,
        payload: res.data,
      });

      dispatch({
        type: HistoricalActionTypes.HISTORICAL__LOADING,
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
