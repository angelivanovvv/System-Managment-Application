import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { directoriesReducer } from "./reducers/directoriesReducer";
import { noticesReducer } from "./reducers/noticesReducer";
import { uiReducer } from "./reducers/uiReducer";
import { searchReducer } from "./reducers/searchReducer";

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ui: uiReducer,
    directories: directoriesReducer,
    notices: noticesReducer,
    search: searchReducer
  });
