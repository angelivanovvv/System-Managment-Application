import * as actionTypes from "../actionTypes/searchTypes";
import * as helpers from "../../common/helpers/actionHelpers";

/*-------------------- INIT ACTION CREATORS --------------------*/

const initSearchCollection = notices => {
  return {
    type: actionTypes.INIT_SEARCH_COLLECTION,
    payload: {
      list: notices,
      simpleList: helpers.getByName(notices),
      advanceList: helpers.getByName(notices)
    }
  };
};

const advanceFilterNotices = payload => {
  return {
    type: actionTypes.ADVANCE_FILTER_NOTICES,
    payload: {
      advanceList: payload
    }
  };
};

export { initSearchCollection, advanceFilterNotices };
