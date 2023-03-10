export interface HistoricalState {
  loading: boolean;
  res: {
    base?: string;
    date?: string;
    rates?: {};
  };
}

export enum HistoricalActionTypes {
  GET__HISTORICAL__SUCCESS = "GET__HISTORICAL__SUCCESS",
  HISTORICAL__LOADING = "HISTORICAL__LOADING",
}

interface HistoricalLoadingAction {
  type: HistoricalActionTypes.HISTORICAL__LOADING;
}
interface GetHistoricalSuccessAction {
  type: HistoricalActionTypes.GET__HISTORICAL__SUCCESS;
  payload: {};
}

export type HistoricalAction =
  | GetHistoricalSuccessAction
  | HistoricalLoadingAction;
