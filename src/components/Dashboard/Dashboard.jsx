import React from "react";
// javascript plugin used to create scrollbars on windows

import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Typography from "../Sidebar/Typography";
import dashboardRoutes from "../Sidebar/SidebarRoutes.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} />
        <div className="main-panel" ref="mainPanel">
          <Switch>
            <Route exact path="/typography" component={Typography} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
