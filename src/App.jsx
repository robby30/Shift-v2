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
    const { isLoaded } = this.props.auth;
    if (isLoaded) {
      return (
        <div id="page-container">
          <div id="content-wrap" />
          <div className="App">
            <Header />
            <div style={{ minHeight: "660px" }}>
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      );
    } else {
      return <div id="page-container" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
