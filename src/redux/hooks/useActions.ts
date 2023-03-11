import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch } from "../types/storeTypes";

import ActionCreators from "./../actions/index";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(ActionCreators, dispatch);
};
