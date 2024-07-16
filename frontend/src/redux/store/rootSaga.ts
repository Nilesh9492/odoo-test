import { all } from "redux-saga/effects";
import roomsSaga from "../rooms/saga";

export function* rootSaga() {
  yield all([roomsSaga()]);
}
