import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

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

import Dashboard from "./components/Dashboard/Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faBookOpen,
  faUtensils,
  faBell,
  faBars,
  faCog,
  faUsersCog,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUtensils,
  faAddressCard,
  faBookOpen,
  faBell,
  faBars,
  faCog,
  faUsersCog,
  faTrash
);
const hist = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
unregister();
