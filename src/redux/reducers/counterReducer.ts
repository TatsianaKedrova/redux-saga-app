import { getLatestNews } from "./../../api/apiInfo";
import { combineReducers } from "redux";
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

export type InitialStateType = {
  count: number;
};

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
      return state;
  }
};

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
