export interface ConvertState {
  res: {
    date?: string;
    result?: number;
    query?: {
      from: string;
      to: string;
      amount: number;
    };
  };
  loading: boolean;
}

export enum ConvertActionTypes {
  GET__CONVERT__SUCCESS = "GET__CONVERT__SUCCESS",
  CONVERT__LOADING = "CONVERT__LOADING",
}

interface ConvertLoadingAction {
  type: ConvertActionTypes.CONVERT__LOADING;
  payload: boolean;
}

interface GetConvertSuccessAction {
  type: ConvertActionTypes.GET__CONVERT__SUCCESS;
  payload: {};
}

export type ConvertAction = GetConvertSuccessAction | ConvertLoadingAction;
