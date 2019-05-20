import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home"
import Header from "./components/Header/Header";
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"

class App extends React.Component {
  render() {
    return (
      <div id="page-container">
        <div id="content-wrap" />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/register" component={Header} />
            <Route exact path="/login" component={Header} />
          </Switch>
          <div style={{ minHeight: "660px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route path="/dashboard" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} /> */}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
