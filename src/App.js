import React from "react";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

import { initStore } from "./reduxSource/createStore";
import { rootSaga } from "./reduxSource/rootSaga";

import Pages from "./common/Exports/pages-export";

import "./styles/app.scss";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = initStore(history, sagaMiddleware);

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Pages.Layout>
              <Pages.Body />
            </Pages.Layout>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}
export default App;
