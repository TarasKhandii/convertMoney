import axios from "./axios";

export const getConvert = async (from: string, to: string, sum: string) => {
  return axios({
    method: "get",
    url: `/convert`,
    params: {
      from,
      to,
      amount: sum,
    },
  });
};
