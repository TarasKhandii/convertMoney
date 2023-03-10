export interface ComparisonChartsState {
  loading: boolean;
  res: {
    start_date?: string;
    end_date?: string;
    base?: string;
    rates?: { [key: string]: { [key: string]: number } };
  };
}
export enum ComparisonChartsTypes {
  GET__COMPARISON__CHARTS = "GET__COMPARISON__CHARTS",
  COMPARISON__CHARTS__LOADING = "COMPARISON__CHARTS__LOADING",
}

interface ComparisonChartsLoadingActions {
  type: ComparisonChartsTypes.COMPARISON__CHARTS__LOADING;
}

interface ComparisonChartsSuccessActions {
  type: ComparisonChartsTypes.GET__COMPARISON__CHARTS;
  payload: {};
}

export type ComparisonChartsActions =
  | ComparisonChartsSuccessActions
  | ComparisonChartsLoadingActions;
