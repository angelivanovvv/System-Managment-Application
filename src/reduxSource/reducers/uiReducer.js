import * as actionTypes from "../actionTypes/uiTypes";

const initialState = {
  sideNav: {
    open: true,
    modalShow: false,
    modalType: null
  },
  modals: {
    editShow: false,
    removeShow: false
  },
  searchType: "simple"
};

const toggleSideNavMenu = state => {
  return {
    ...state,
    sideNav: {
      ...state.sideNav,
      open: !state.sideNav.open
    }
  };
};

const openSideNavModal = state => {
  return {
    ...state,
    sideNav: {
      ...state.sideNav,
      modalShow: true
    }
  };
};

const closeSideNavModal = state => {
  return {
    ...state,
    sideNav: {
      ...state.sideNav,
      modalShow: false
    }
  };
};

const getSideNavModalType = (state, action) => {
  return {
    ...state,
    sideNav: {
      ...state.sideNav,
      modalType: action.payload.modalType
    }
  };
};

const getSearchType = (state, action) => {
  return {
    ...state,
    searchType: action.payload.searchType
  };
};

const openEditModal = state => {
  return {
    ...state,
    modals: {
      ...state.modals,
      editShow: true
    }
  };
};

const closeEditModal = state => {
  return {
    ...state,
    modals: {
      ...state.modals,
      editShow: false
    }
  };
};

const openRemoveModal = state => {
  return {
    ...state,
    modals: {
      ...state.modals,
      removeShow: true
    }
  };
};

const closeRemoveModal = state => {
  return {
    ...state,
    modals: {
      ...state.modals,
      removeShow: false
    }
  };
};

const Default = state => {
  return { ...state };
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDE_NAV_MENU:
      return toggleSideNavMenu(state, action);
    case actionTypes.OPEN_SIDE_NAV_MODAL:
      return openSideNavModal(state, action);
    case actionTypes.CLOSE_SIDE_NAV_MODAL:
      return closeSideNavModal(state, action);
    case actionTypes.GET_SIDE_NAV_MODAL_TYPE:
      return getSideNavModalType(state, action);
    case actionTypes.GET_SEARCH_TYPE:
      return getSearchType(state, action);
    case actionTypes.OPEN_EDIN_MODAL:
      return openEditModal(state, action);
    case actionTypes.CLOSE_EDIT_MODAL:
      return closeEditModal(state, action);
    case actionTypes.OPEN_REMOVE_MODAL:
      return openRemoveModal(state);
    case actionTypes.CLOSE_REMOVE_MODAL:
      return closeRemoveModal(state);
    default:
      return Default(state, action);
  }
};
