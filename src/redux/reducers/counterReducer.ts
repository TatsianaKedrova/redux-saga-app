import { CounterReducerActionType } from "./../actions/actionCreatot";
import { newsReducer } from "./newsReducer";
import { combineReducers } from "redux";
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

export type InitialStateType = {
  count: number;
};

const initialState = {
  count: 0,
};

export const counterReducer = (
  state = initialState,
  action: CounterReducerActionType
) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
