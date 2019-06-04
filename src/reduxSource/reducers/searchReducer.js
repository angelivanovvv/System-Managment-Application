import * as actionTypes from "../actionTypes/searchTypes";

const initialState = {
  list: [],
  simpleList: [],
  advanceList: []
};

const initSearchCollection = (state, action) => {
  return {
    ...state,
    list: action.payload.list,
    simpleList: action.payload.simpleList,
    advanceList: action.payload.advanceList
  };
};

const advanceFiltetNotices = (state, action) => {
  return {
    ...state,
    advanceList: action.payload.advanceList
  };
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_SEARCH_COLLECTION:
      return initSearchCollection(state, action);
    case actionTypes.ADVANCE_FILTER_NOTICES:
      return advanceFiltetNotices(state, action);
    default:
      return state;
  }
};
