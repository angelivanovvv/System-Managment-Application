import { all, call, put, delay } from "redux-saga/effects";

import * as actions from "../actions/notices";
import * as uiActions from "../actions/ui";
import * as dirActions from "../actions/directories";
import * as searchActions from "../actions/search";

import { RoutesActions } from "../../common/ClientRoutes/clientRoutes";

import Api from "../../common/rest-api/api-exports";

function* listNoticesSaga() {
  try {
    let listNotices = yield call(Api.Notices.list);

    yield put(actions.fetchNotices(listNotices));
    yield put(searchActions.initSearchCollection(listNotices));
  } catch (error) {
    yield put(actions.requestNoticesFaild(error));
  }
}

function* singleNoticeSaga(action) {
  try {
    let singleNotice = yield call(Api.Notices.single, action.payload.noticeId);

    yield put(actions.fetchSingleNotice(singleNotice));
  } catch (error) {
    yield put(actions.requestNoticesFaild(error));
  }
}

function* createNoticesSaga(action) {
  try {
    yield call(Api.Notices.create, {
      directoryId: action.payload.formData.directoryId,
      title: action.payload.formData.title,
      tags: action.payload.formData.tags,
      description: action.payload.formData.description
    });

    yield put(uiActions.openEditModal());
    yield delay(1000);

    yield put(uiActions.closeEditModal());
    yield delay(300);

    yield put(RoutesActions.toHome());
  } catch (error) {
    yield put(actions.requestNoticesFaild(error));
  }
}

function* editNoticeSaga(action) {
  try {
    yield call(Api.Notices.edit, action.payload.id, action.payload.formData);

    if (action.payload.singleEdit) {
      yield put(actions.initNotices());
      yield put(dirActions.clearDirectoriesTree());
      yield put(dirActions.initDirectories());
    } else {
      yield put(uiActions.openEditModal());
      yield delay(1000);

      yield put(uiActions.closeEditModal());

      yield all([
        put(actions.initNotices()),
        put(actions.clearSingleNotice()),
        put(actions.clearNoticesList())
      ]);
    }
  } catch (error) {
    yield put(actions.requestNoticesFaild(error));
  }
}

function* removeNoticeSaga(action) {
  try {
    yield call(Api.Notices.delete, action.payload.id);

    yield put(uiActions.closeRemoveModal());
    yield put(uiActions.openEditModal());

    yield delay(1000);

    yield all([
      put(uiActions.closeEditModal()),
      put(actions.initNotices()),
      put(actions.clearSingleNotice())
    ]);
  } catch (error) {
    yield put(actions.requestNoticesFaild(error));
  }
}

function* removeNoticesForDirectorySaga(action) {
  try {
    let noticesIds = action.payload.notices;

    yield all(noticesIds.map(noticeId => call(Api.Notices.delete, noticeId)));
  } catch (error) {
    yield put(actions.requestNoticesFaild(error));
  }
}

function* changeNoticesPositionSaga(action) {
  try {
    let notices = action.payload.notices;

    yield all(notices.map(notice => call(Api.Notices.edit, notice.id, notice)));
  } catch (error) {
    yield put(actions.requestNoticesFaild(error));
  }
}

export {
  listNoticesSaga,
  singleNoticeSaga,
  createNoticesSaga,
  editNoticeSaga,
  removeNoticeSaga,
  removeNoticesForDirectorySaga,
  changeNoticesPositionSaga
};
