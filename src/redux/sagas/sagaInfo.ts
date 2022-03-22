import { LatestNewsType } from "./../reducers/newsReducer";
import { GET_LATEST_NEWS } from "../constants";
import { takeEvery, put, call } from "redux-saga/effects";
import { getLatestNews } from "../../api/apiInfo";
import { setLatestNews } from "../actions/actionCreatot";

export function* handleLatestNews() {
  let data:LatestNewsType = yield getLatestNews();
  yield put(setLatestNews(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
