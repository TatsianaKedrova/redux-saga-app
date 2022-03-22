import { SET_LATEST_NEWS } from "./../constants";
import { LatestNewsType } from "./../reducers/newsReducer";
import { INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS } from "../constants";

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});

export const setLatestNews = (news: LatestNewsType) =>
  ({
    type: SET_LATEST_NEWS,
    news,
  } as const);

export type SetLatestNewsType = ReturnType<typeof setLatestNews>;
export type IncreaseCountType = ReturnType<typeof increaseCount>;
export type DecreaseCountType = ReturnType<typeof decreaseCount>;

export type CounterReducerActionType = IncreaseCountType | DecreaseCountType;
