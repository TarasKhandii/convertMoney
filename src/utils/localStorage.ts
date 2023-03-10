export interface ILocalStorage {
  date: string;
  historical: boolean;
  info: { rate: number };
  motd: { msg: string; url: string };
  query: { from: string; to: string; amount: number };
  result: number;
  success: boolean;
}

export const setUserHistory = (userHistory: Array<ILocalStorage>) => {
  localStorage.setItem("userHistory", JSON.stringify(userHistory));
};

export const getUserHistory = () => {
  return JSON.parse(localStorage.getItem("userHistory") || "[]");
};

export const removeUserHistory = () => {
  localStorage.removeItem("userHistory");
};
