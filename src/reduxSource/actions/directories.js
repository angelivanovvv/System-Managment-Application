import * as initTypes from "../actionTypes/initTypes";
import * as actionTypes from "../actionTypes/directoriesTypes";
import * as helpers from "../../common/helpers/actionHelpers";

/*----------------------------- INIT ACTIONS CREATORS ----------------------------*/

const initDirectories = () => {
  return {
    type: initTypes.INIT_DIRECTORIES
  };
};

const initSingleDirectory = (id, directories) => {
  return {
    type: initTypes.INIT_SINGLE_DIRECTORY,
    payload: {
      directoryId: id,
      directoriesList: directories
    }
  };
};

const initCreateDirectory = data => {
  return {
    type: initTypes.INIT_CREATE_DIRECTORIES,
    payload: {
      formData: data
    }
  };
};

const initEditDirectory = (id, data) => {
  return {
    type: initTypes.INIT_EDIT_DIRECTORY,
    payload: {
      id: id,
      formData: data
    }
  };
};

const initRemoveDirectory = id => {
  return {
    type: initTypes.INIT_REMOVE_DIRECTORY,
    payload: {
      id: id
    }
  };
};

/*----------------------------- FETCH ACTIONS CREATORS ----------------------------*/

const fetchDirectories = directories => {
  let transformDirs = helpers.transformDirectoriesList(directories);
  return {
    type: actionTypes.FETCH_DIRECTORIES,
    payload: {
      directories: transformDirs,
      directoriesById: directories
    }
  };
};

const fetchDirectoriesById = directories => {
  return {
    type: actionTypes.FETCH_DIRECTORIES_BY_ID,
    payload: {
      directoriesById: directories
    }
  };
};

const fetchSingleDirectory = (sngDir, directories) => {
  let transformSingleDir = helpers.transformSingleDirectory(
    sngDir,
    directories
  );
  return {
    type: actionTypes.FETCH_SINGLE_DIRECTORY,
    payload: {
      singleDirectory: transformSingleDir
    }
  };
};

const requestDirectoriesFaild = error => {
  return {
    type: actionTypes.REQUEST_DIRECTORIES_FAILD,
    payload: {
      status: error.response.status,
      message: error.response.statusText,
      log: error.response
    }
  };
};

/*----------------------------- FILTER ACTIONS CREATORS ----------------------------*/

const filterDirectoriesForItem = (directories, item) => {
  return {
    type: actionTypes.FILTER_DIRECTORIES_FOR_ITEM,
    payload: {
      directories: helpers.filterDirectoriesForItem(directories, item),
      name: item
    }
  };
};

const filterDirectoriesForRoot = () => {
  return {
    type: actionTypes.FILTER_DIRECTORIES_FOR_ROOT
  };
};

/*----------------------------- CLEAR ACTIONS CREATORS ----------------------------*/

const clearSingleDirectory = () => {
  return {
    type: actionTypes.CLEAR_SINGLE_DIRECORY
  };
};

const clearDirectoriesTree = () => {
  return {
    type: actionTypes.CLEAR_DIRECTORIES_TREE
  };
};

export {
  initDirectories,
  initSingleDirectory,
  initCreateDirectory,
  initEditDirectory,
  initRemoveDirectory,
  fetchDirectories,
  requestDirectoriesFaild,
  fetchSingleDirectory,
  fetchDirectoriesById,
  filterDirectoriesForItem,
  filterDirectoriesForRoot,
  clearSingleDirectory,
  clearDirectoriesTree
};
