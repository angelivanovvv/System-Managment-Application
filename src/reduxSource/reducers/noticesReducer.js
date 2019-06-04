import * as initActionTypes from "../actionTypes/initTypes";

import * as actionTypes from "../actionTypes/noticesTypes";
import * as uiActionsTypes from "../actionTypes/uiTypes";

const initialState = {
  all: [],
  single: {
    directoryId: null,
    title: null,
    description: null,
    tags: null,
    id: null,
    position: null
  },
  filter: [],
  filtered: false,
  loading: null,
  error: {
    openModal: false,
    status: false,
    message: null
  }
};

/**------------------------------- INIT STATE -------------------------------**/

const initNotices = state => {
  return {
    ...state,
    loading: true
  };
};

const initCreateNotices = state => {
  return {
    ...state,
    loading: true
  };
};

const initEditNotice = state => {
  return {
    ...state,
    loading: true
  };
};

const initRemoveNotice = state => {
  return {
    ...state,
    loading: true
  };
};

const initChangeNoticesPosition = state => {
  return {
    ...state,
    loading: true
  };
};

/**------------------------------- FETCH STATE -------------------------------**/

const fetchNotices = (state, action) => {
  return {
    ...state,
    all: action.payload.notices,
    error: {
      ...state.error,
      status: false,
      message: null
    },
    loading: false
  };
};

const fetchSingleEditNotice = state => {
  return {
    ...state,
    filter: [],
    filtered: false,
    error: {
      ...state.error,
      status: false,
      message: null
    },
    loading: false
  };
};

const fetchSingleNotice = (state, action) => {
  return {
    ...state,
    single: action.payload.singleNotice,
    error: {
      ...state.error,
      status: false,
      message: null
    },
    loading: false
  };
};

const requestNoticesFaild = (state, action) => {
  return {
    ...state,
    all: [],
    single: {
      directoryId: null,
      title: null,
      description: null,
      tags: null,
      id: null,
      position: null
    },
    filter: [],
    error: {
      ...state.error,
      openModal: true,
      status: action.payload.status,
      message: action.payload.message
    },
    loading: null
  };
};

/**------------------------------- FILTER STATE -------------------------------**/

const filterNotices = (state, action) => {
  return {
    ...state,
    filtered: true,
    filter: action.payload.filterNotices
  };
};

/**------------------------------- RFRESH STATE -------------------------------**/

const refreshNotices = state => {
  return {
    ...state,
    filtered: false,
    filter: []
  };
};

/**------------------------------- CLEAR STATE -------------------------------**/

const clearSingleNotice = state => {
  return {
    ...state,
    single: {
      directoryId: null,
      title: null,
      description: null,
      tags: null,
      id: null,
      position: null
    }
  };
};

const clearNoticesList = state => {
  return {
    ...state,
    filtered: false,
    filter: []
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

export const noticesReducer = (state = initialState, action) => {
  switch (action.type) {
    case initActionTypes.INIT_NOTICES:
      return initNotices(state, action);
    case initActionTypes.INIT_CREATE_NOTICES:
      return initCreateNotices(state, action);
    case initActionTypes.INIT_EDIT_NOTICE:
      return initEditNotice(state, action);
    case initActionTypes.INIT_REMOVE_NOTICE:
      return initRemoveNotice(state, action);
    case initActionTypes.INIT_CHANGE_NOTICES_POSITION:
      return initChangeNoticesPosition(state, action);
    case actionTypes.FETCH_NOTICES:
      return fetchNotices(state, action);
    case actionTypes.FETCH_SUCCESS_EDIT_NOTICE:
      return fetchSingleEditNotice(state);
    case actionTypes.FETCH_SINGLE_NOTICE:
      return fetchSingleNotice(state, action);
    case actionTypes.REQUEST_NOTICES_FAILD:
      return requestNoticesFaild(state, action);
    case uiActionsTypes.CLOSE_ERROR_MODAL:
      return closeErrorModal(state, action);
    case actionTypes.FILTER_NOTICES:
      return filterNotices(state, action);
    case actionTypes.REFRESH_NOTICES:
      return refreshNotices(state, action);
    case actionTypes.CLEAR_SINGLE_NOTICE:
      return clearSingleNotice(state);
    case actionTypes.CLEAR_NOTICES_LIST:
      return clearNoticesList(state);
    default:
      return defaultState(state, action);
  }
};
