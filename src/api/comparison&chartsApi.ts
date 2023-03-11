import axios from "./axios";

export const getComparisonCharts = (
  startDate: string,
  endDate: string,
  base: string,
  symbols: string
) => {
  return axios({
    method: "get",
    url: `/timeseries?`,
    params: {
      start_date: startDate,
      end_date: endDate,
      base,
      symbols,
    },
  });
};
