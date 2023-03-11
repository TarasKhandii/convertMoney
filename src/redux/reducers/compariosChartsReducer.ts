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
      return { ...state, loading: action.payload };

    case ComparisonChartsTypes.GET__COMPARISON__CHARTS:
      return { ...state, res: action.payload };

    default:
      return state;
  }
};
