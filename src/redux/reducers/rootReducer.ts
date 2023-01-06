import { combineReducers } from "redux";
import { convertPageReducer } from "./convertPageReducer";

export const rootReducer = combineReducers({ convertPage: convertPageReducer });

export type RootState = ReturnType<typeof rootReducer>;
