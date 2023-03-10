import axios from "./axios";

export const getComparisonCharts = (
  startDate: string,
  endDate: string,
  base: string,
  symbols: string
) => {
  return axios({
    method: "get",
    url: `/timeseries?start_date=${startDate}&end_date=${endDate}&base=${base}&symbols=${symbols}`,
  });
};
