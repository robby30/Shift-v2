import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage"
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div id="page-container">
        <div id="content-wrap" />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Header} />
          </Switch>
          <div style={{ minHeight: "660px" }}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
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
