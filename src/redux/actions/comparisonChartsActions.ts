import { Dispatch } from "react";
import { getComparisonCharts } from "../../api/comparison&chartsApi";
import {
  ComparisonChartsActions,
  ComparisonChartsTypes,
} from "../types/comparisonChartsTypes";

export const fetchComparisonCharts = (
  startDate: string,
  endDate: string,
  base: string,
  symbols: string
) => {
  return async (dispatch: Dispatch<ComparisonChartsActions>) => {
    try {
      dispatch({
        type: ComparisonChartsTypes.COMPARISON__CHARTS__LOADING,
        payload: true,
      });

      const res = await getComparisonCharts(startDate, endDate, base, symbols);

      dispatch({
        type: ComparisonChartsTypes.GET__COMPARISON__CHARTS,
        payload: res.data,
      });

      dispatch({
        type: ComparisonChartsTypes.COMPARISON__CHARTS__LOADING,
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
