import {
  ConvertAction,
  ConvertActionTypes,
  ConvertState,
} from "../types/convertPageTypes";

const initialState: ConvertState = {
  res: {},
  loading: false,
};

export const convertPageReducer = (
  state = initialState,
  action: ConvertAction
): ConvertState => {
  switch (action.type) {
    case ConvertActionTypes.CONVERT__LOADING:
      return { ...state, loading: action.payload };

    case ConvertActionTypes.GET__CONVERT__SUCCESS:
      return { ...state, res: action.payload };

    default:
      return state;
  }
};
