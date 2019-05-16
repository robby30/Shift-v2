import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Header} />
      </Switch>
    );
  }
}

export default App;
