import { SetLatestNewsType } from "./../actions/actionCreatot";
import { SET_LATEST_NEWS } from "./../constants";
import { getLatestNews } from "./../../api/apiInfo";

export type LatestNewsType = ReturnType<typeof getLatestNews>;

export type InitialStateType = {
  news: LatestNewsType;
};

const initialState = {
  news: {},
};

export const newsReducer = (
  state = initialState,
  action: SetLatestNewsType
) => {
  switch (action.type) {
    case SET_LATEST_NEWS:
      return { ...state, news: { ...state.news, ...action.news } };
    default:
      return state;
  }
};
