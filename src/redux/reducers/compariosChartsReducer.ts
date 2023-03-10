import {
  ComparisonChartsActions,
  ComparisonChartsState,
  ComparisonChartsTypes,
} from "../types/comparisonChartsTypes";

const initialState: ComparisonChartsState = {
  res: {},
  loading: false,
};

export const ComparisonChartsReducer = (
  state = initialState,
  action: ComparisonChartsActions
): ComparisonChartsState => {
  switch (action.type) {
    case ComparisonChartsTypes.COMPARISON__CHARTS__LOADING:
      return { loading: true, res: {} };
    case ComparisonChartsTypes.GET__COMPARISON__CHARTS:
      return { loading: false, res: action.payload };
    default:
      return state;
  }
};
