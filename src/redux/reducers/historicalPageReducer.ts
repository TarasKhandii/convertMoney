import {
  HistoricalAction,
  HistoricalActionTypes,
  HistoricalState,
} from "../types/historicalPAgeTypes";

const initialState: HistoricalState = {
  res: {},
  loading: false,
};

export const HistoricalReducer = (
  state = initialState,
  action: HistoricalAction
): HistoricalState => {
  switch (action.type) {
    case HistoricalActionTypes.HISTORICAL__LOADING:
      return { loading: true, res: {} };
    case HistoricalActionTypes.GET__HISTORICAL__SUCCESS:
      return { loading: false, res: action.payload };
    default:
      return state;
  }
};
