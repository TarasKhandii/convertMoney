import { combineReducers } from "redux";
import { ComparisonChartsReducer } from "./compariosChartsReducer";
import { convertPageReducer } from "./convertPageReducer";
import { HistoricalReducer } from "./historicalPageReducer";

export const rootReducer = combineReducers({
  convertPage: convertPageReducer,
  historicalPage: HistoricalReducer,
  comparisonCharts: ComparisonChartsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
