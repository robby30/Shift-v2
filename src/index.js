import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./serviceWorker";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// new imports start
import { Provider } from "react-redux";
import configureStore from "./store.js";
// new imports stop

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const hist = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
unregister();
