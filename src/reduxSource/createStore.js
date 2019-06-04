import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";

import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = (history, sagaMiddleware) =>
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk, sagaMiddleware)
  );

export const initStore = (history, sagaMiddleware) =>
  createStore(rootReducer(history), enhancer(history, sagaMiddleware));
