import * as initActionTypes from "../actionTypes/initTypes";

import * as actionTypes from "../actionTypes/directoriesTypes";
import * as uiActionsTypes from "../actionTypes/uiTypes";

const initialState = {
  all: {
    id: null,
    name: "",
    toggled: false,
    children: []
  },
  byId: [],
  single: {
    id: null,
    name: null
  },
  filter: [],
  loading: null,
  error: {
    openModal: false,
    status: null,
    message: null
  }
};
/**------------------------------- INIT STATE -------------------------------**/

const initDirectories = state => {
  return {
    ...state,
    loading: true
  };
};

const initCreateDirectory = state => {
  return {
    ...state,
    loading: true
  };
};

const initEditDirectory = state => {
  return {
    ...state,
    loading: true
  };
};

const initRemoveDirectory = state => {
  return {
    ...state,
    loading: true
  };
};

/**------------------------------- FETCH STATE -------------------------------**/

const fetchDirectories = (state, action) => {
  return {
    ...state,
    all: {
      ...state.all,
      id: action.payload.directories.id,
      name: action.payload.directories.name,
      children: action.payload.directories.children
    },
    error: {
      openModal: false,
      status: null,
      message: null
    },
    loading: false
  };
};

const fetchDirectoriesById = (state, action) => {
  return {
    ...state,
    byId: action.payload.directoriesById,
    error: {
      openModal: false,
      status: null,
      message: null
    },
    loading: false
  };
};

const fetchSingleDirectory = (state, action) => {
  return {
    ...state,
    single: action.payload.singleDirectory,
    error: {
      openModal: false,
      status: null,
      message: null
    },
    loading: false
  };
};

const requestDirectoriesFaild = (state, action) => {
  return {
    ...state,
    all: {
      id: null,
      name: "",
      toggled: false,
      children: []
    },
    byId: [],
    single: {
      id: null,
      name: null
    },
    filter: [],
    error: {
      ...state.error,
      openModal: true,
      status: action.payload.status,
      message: action.payload.message
    },
    loading: false
  };
};

/**------------------------------- FILTER STATE -------------------------------**/

const filterDirectoriesForItem = (state, action) => {
  return {
    ...state,
    filter: action.payload.directories
  };
};

const filterDirectoriesForRoot = state => {
  return {
    ...state,
    filter: []
  };
};

/**------------------------------- CLEAR STATE -------------------------------**/

const clearSingleDirectory = state => {
  return {
    ...state,
    single: {
      id: null,
      name: null
    }
  };
};

const clearDirectoriesTree = state => {
  return {
    ...state,
    all: {
      id: null,
      name: "",
      toggled: false,
      children: []
    }
  };
};

/**------------------------------- CLOSE STATE -------------------------------**/

const closeErrorModal = state => {
  return {
    ...state,
    error: {
      ...state.error,
      openModal: false
    }
  };
};

/**------------------------------- DEFAULT STATE -------------------------------**/

const defaultState = state => {
  return {
    ...state
  };
};

export const directoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case initActionTypes.INIT_DIRECTORIES:
      return initDirectories(state, action);
    case initActionTypes.INIT_CREATE_DIRECTORIES:
      return initCreateDirectory(state, action);
    case initActionTypes.INIT_EDIT_DIRECTORY:
      return initEditDirectory(state, action);
    case initActionTypes.INIT_REMOVE_DIRECTORY:
      return initRemoveDirectory(state, action);
    case actionTypes.FETCH_DIRECTORIES:
      return fetchDirectories(state, action);
    case actionTypes.FETCH_DIRECTORIES_BY_ID:
      return fetchDirectoriesById(state, action);
    case actionTypes.FETCH_SINGLE_DIRECTORY:
      return fetchSingleDirectory(state, action);
    case actionTypes.REQUEST_DIRECTORIES_FAILD:
      return requestDirectoriesFaild(state, action);
    case uiActionsTypes.CLOSE_ERROR_MODAL:
      return closeErrorModal(state, action);
    case actionTypes.FILTER_DIRECTORIES_FOR_ITEM:
      return filterDirectoriesForItem(state, action);
    case actionTypes.FILTER_DIRECTORIES_FOR_ROOT:
      return filterDirectoriesForRoot(state, action);
    case actionTypes.CLEAR_SINGLE_DIRECORY:
      return clearSingleDirectory(state);
    case actionTypes.CLEAR_DIRECTORIES_TREE:
      return clearDirectoriesTree(state);
    default:
      return defaultState(state, action);
  }
};
