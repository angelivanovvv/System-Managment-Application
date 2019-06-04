import * as actionTypes from "../actionTypes/uiTypes";

/*--------------------------- SIDE NAV MODAL ---------------------------*/

const openSideNavModal = () => {
  return {
    type: actionTypes.OPEN_SIDE_NAV_MODAL
  };
};

const closeSideNavModal = () => {
  return {
    type: actionTypes.CLOSE_SIDE_NAV_MODAL
  };
};

const toggleSideNavMenu = () => {
  return {
    type: actionTypes.TOGGLE_SIDE_NAV_MENU
  };
};

const getSideNavModalType = modalType => {
  return {
    type: actionTypes.GET_SIDE_NAV_MODAL_TYPE,
    payload: {
      modalType: modalType
    }
  };
};

/*--------------------------- EDIN MODAL ---------------------------*/

const openEditModal = () => {
  return {
    type: actionTypes.OPEN_EDIN_MODAL
  };
};

const closeEditModal = () => {
  return {
    type: actionTypes.CLOSE_EDIT_MODAL
  };
};

/*--------------------------- REMOVE MODAL ---------------------------*/

const openRemoveModal = () => {
  return {
    type: actionTypes.OPEN_REMOVE_MODAL
  };
};

const closeRemoveModal = () => {
  return {
    type: actionTypes.CLOSE_REMOVE_MODAL
  };
};

/*--------------------------- REMOVE MODAL ---------------------------*/

const closeErrorModal = () => {
  return {
    type: actionTypes.CLOSE_ERROR_MODAL
  };
};

/*--------------------------- SEARCH ---------------------------*/

const getSearchType = searchType => {
  return {
    type: actionTypes.GET_SEARCH_TYPE,
    payload: {
      searchType: searchType
    }
  };
};

export {
  toggleSideNavMenu,
  getSideNavModalType,
  getSearchType,
  openSideNavModal,
  closeSideNavModal,
  openEditModal,
  closeEditModal,
  openRemoveModal,
  closeRemoveModal,
  closeErrorModal
};
