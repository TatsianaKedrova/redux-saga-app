import { GET_LATEST_NEWS } from './../constants';
import { takeEvery } from "redux-saga/effects";
import { INCREASE_COUNT } from "../constants";
import { getLatestNews } from "../../api/apiInfo";

export function* workerSaga() {
  let data: ReturnType<typeof getLatestNews> = yield getLatestNews();
  console.log("news: ", data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
