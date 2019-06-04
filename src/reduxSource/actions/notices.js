import * as initTypes from "../actionTypes/initTypes";
import * as actionTypes from "../actionTypes/noticesTypes";
import * as helpers from "../../common/helpers/actionHelpers";

/*----------------------------- INIT ACTIONS CREATORS ----------------------------*/

const initNotices = () => {
  return {
    type: initTypes.INIT_NOTICES
  };
};

const initCreateNotices = data => {
  return {
    type: initTypes.INIT_CREATE_NOTICES,
    payload: {
      formData: data
    }
  };
};

const initEditNotice = (id, data, singleEdit) => {
  return {
    type: initTypes.INIT_EDIT_NOTICE,
    payload: {
      id: id,
      formData: data,
      singleEdit: singleEdit
    }
  };
};

const initRemoveNotice = id => {
  return {
    type: initTypes.INIT_REMOVE_NOTICE,
    payload: {
      id: id
    }
  };
};

const initRemoveNoticesForDirectory = ids => {
  return {
    type: initTypes.INIT_REMOVE_NOTICES_FOR_DIRECTORY,
    payload: {
      notices: ids
    }
  };
};

const initSingleNotice = id => {
  return {
    type: initTypes.INIT_SINGLE_NOTICE,
    payload: {
      noticeId: id
    }
  };
};

const initChangeNoticesPosition = notices => {
  return {
    type: initTypes.INIT_CHANGE_NOTICES_POSITION,
    payload: {
      notices: notices
    }
  };
};

/*----------------------------- FETCH ACTIONS CREATORS ----------------------------*/

const fetchNotices = notices => {
  return {
    type: actionTypes.FETCH_NOTICES,
    payload: {
      notices: notices
    }
  };
};

const fetchSingleNotice = sngNotice => {
  return {
    type: actionTypes.FETCH_SINGLE_NOTICE,
    payload: {
      singleNotice: sngNotice
    }
  };
};

const requestNoticesFaild = error => {
  return {
    type: actionTypes.REQUEST_NOTICES_FAILD,
    payload: {
      status: error.response.status,
      message: error.response.statusText,
      log: error.response
    }
  };
};

/*----------------------------- FILTER ACTIONS CREATORS ----------------------------*/

const filterNotices = (notices, dirId) => {
  let filterNotices = helpers.filterNotices(notices, dirId);
  return {
    type: actionTypes.FILTER_NOTICES,
    payload: {
      filterNotices: filterNotices
    }
  };
};

/*----------------------------- REFRESH ACTIONS CREATORS ----------------------------*/

const refreshNotices = () => {
  return {
    type: actionTypes.REFRESH_NOTICES
  };
};

/*----------------------------- CLEAR ACTIONS CREATORS ----------------------------*/

const clearSingleNotice = () => {
  return {
    type: actionTypes.CLEAR_SINGLE_NOTICE
  };
};

const clearNoticesList = () => {
  return {
    type: actionTypes.CLEAR_NOTICES_LIST
  };
};

export {
  initNotices,
  initCreateNotices,
  initEditNotice,
  initSingleNotice,
  initRemoveNotice,
  initRemoveNoticesForDirectory,
  initChangeNoticesPosition,
  fetchNotices,
  fetchSingleNotice,
  requestNoticesFaild,
  clearSingleNotice,
  refreshNotices,
  filterNotices,
  clearNoticesList
};
