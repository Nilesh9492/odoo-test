import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { searchTypes } from "./searchTypes";
import { getSearchRoomsReq } from "../../services/roomsService";

export function* getRoomsListEffect() {
  yield takeEvery(searchTypes.GET_ROOM_LIST, function* ({ payload }: any): any {
    try {
      const response = yield call(getSearchRoomsReq, payload);
      if (response.status) {
        yield put({
          type: searchTypes.GET_ROOM_LIST_SUCCESS,
          searchResult: response.data,
        });
      } else {
        yield put({
          type: searchTypes.GET_ROOM_LIST_FAILED,
          errorMessage: response.data.message,
        });
      }
    } catch (error: any) {
      yield put({
        type: searchTypes.GET_ROOM_LIST_FAILED,
        errorMessage: error.data.message,
      });
    }
  });
}

export default function* roomsSaga() {
  yield all([fork(getRoomsListEffect)]);
}
