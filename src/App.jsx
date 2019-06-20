import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import Dashboard from "./components/Dashboard/Dashboard";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { loaded } = this.props;
    if (loaded) {
      return (
        <div id="page-container">
          <div id="content-wrap" />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Header} />
              <Route path="/register" component={Header} />
              <Route path="/login" component={Header} />
            </Switch>
            <div style={{ minHeight: "660px" }}>
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={Home} />
                {/* <Route path="/dashboard" component={Dashboard} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
              </Switch>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="page-container">
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loaded: state.firebase.auth.isLoaded
  }
}

export default connect(mapStateToProps)(App);
