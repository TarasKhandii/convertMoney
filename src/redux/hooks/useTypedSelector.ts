import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducers/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
