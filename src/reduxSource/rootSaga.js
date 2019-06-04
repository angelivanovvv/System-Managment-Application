import { takeEvery } from "redux-saga/effects";

import * as initTypes from "./actionTypes/initTypes";
import {
  listDirectorySaga,
  createDirectorySaga,
  singleDirectorySaga,
  editDirectorySaga,
  removeDirectorySaga
} from "./sagas/directoriesSaga";

import {
  listNoticesSaga,
  singleNoticeSaga,
  createNoticesSaga,
  editNoticeSaga,
  removeNoticeSaga,
  removeNoticesForDirectorySaga,
  changeNoticesPositionSaga
} from "./sagas/noticesSaga";

export function* rootSaga() {
  /*------------------ DIRECTORIES ------------------*/
  yield takeEvery(initTypes.INIT_DIRECTORIES, listDirectorySaga);
  yield takeEvery(initTypes.INIT_SINGLE_DIRECTORY, singleDirectorySaga);
  yield takeEvery(initTypes.INIT_CREATE_DIRECTORIES, createDirectorySaga);
  yield takeEvery(initTypes.INIT_EDIT_DIRECTORY, editDirectorySaga);
  yield takeEvery(initTypes.INIT_REMOVE_DIRECTORY, removeDirectorySaga);
  /*------------------ NOTICES ------------------*/
  yield takeEvery(initTypes.INIT_NOTICES, listNoticesSaga);
  yield takeEvery(initTypes.INIT_SINGLE_NOTICE, singleNoticeSaga);
  yield takeEvery(initTypes.INIT_CREATE_NOTICES, createNoticesSaga);
  yield takeEvery(initTypes.INIT_EDIT_NOTICE, editNoticeSaga);
  yield takeEvery(initTypes.INIT_REMOVE_NOTICE, removeNoticeSaga);
  yield takeEvery(
    initTypes.INIT_REMOVE_NOTICES_FOR_DIRECTORY,
    removeNoticesForDirectorySaga
  );
  yield takeEvery(
    initTypes.INIT_CHANGE_NOTICES_POSITION,
    changeNoticesPositionSaga
  );
}
