import { call, put, all, delay } from "redux-saga/effects";

import * as actions from "../actions/directories";
// import * as noticesActions from "../actions/notices";
import * as uiActions from "../actions/ui";

import { RoutesActions } from "../../common/ClientRoutes/clientRoutes";

import Api from "../../common/rest-api/api-exports";

function* listDirectorySaga() {
  try {
    let directories = yield call(Api.Directories.list);
    let directoriesById = yield call(Api.Directories.list);

    yield put(actions.fetchDirectories(directories));
    yield put(actions.fetchDirectoriesById(directoriesById));
  } catch (error) {
    yield put(actions.requestDirectoriesFaild(error));
  }
}

function* singleDirectorySaga(action) {
  try {
    let singleDirectory = yield call(
      Api.Directories.single,
      action.payload.directoryId
    );

    yield put(
      actions.fetchSingleDirectory(
        singleDirectory,
        action.payload.directoriesList
      )
    );
  } catch (error) {
    yield put(actions.requestDirectoriesFaild(error));
  }
}

function* createDirectorySaga(action) {
  try {
    yield call(Api.Directories.create, {
      parentId: action.payload.formData.parentId,
      name: action.payload.formData.name
    });

    yield put(uiActions.openEditModal());
    yield delay(1000);

    yield put(uiActions.closeEditModal());
    yield delay(300);

    yield put(RoutesActions.toHome());
  } catch (error) {
    yield put(actions.requestDirectoriesFaild(error));
  }
}

function* editDirectorySaga(action) {
  try {
    yield call(
      Api.Directories.edit,
      action.payload.id,
      action.payload.formData
    );

    yield put(uiActions.openEditModal());
    yield delay(1000);

    yield put(uiActions.closeEditModal());

    yield all([
      put(actions.initDirectories()),
      put(actions.clearSingleDirectory())
    ]);
  } catch (error) {
    yield put(actions.requestDirectoriesFaild(error));
  }
}

function* removeDirectorySaga(action) {
  try {
    yield call(Api.Directories.delete, action.payload.id);

    yield put(uiActions.closeRemoveModal());
    yield put(uiActions.openEditModal());
    yield delay(1000);

    yield all([
      put(uiActions.closeEditModal()),
      put(actions.clearSingleDirectory()),
      put(actions.initDirectories())
    ]);
  } catch (error) {
    yield put(actions.requestDirectoriesFaild(error));
  }
}

export {
  listDirectorySaga,
  createDirectorySaga,
  editDirectorySaga,
  singleDirectorySaga,
  removeDirectorySaga
};
