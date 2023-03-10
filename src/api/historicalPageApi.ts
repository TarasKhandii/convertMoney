import axios from "./axios";

export const getHistorical = async (date: string, base: string) => {
  return axios({
    method: "get",
    url: `/date=${date}&base=${base}`,
  });
};
