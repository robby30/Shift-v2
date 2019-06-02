import React from "react";
// javascript plugin used to create scrollbars on windows

import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import TypographyView from "../Sidebar/Typography";
import dashboardRoutes from "../Sidebar/SidebarRoutes.jsx";
import DashboardView from "../../views/Dashboard/Dashboard.jsx";
import Header from "../HeaderDashboard/HeaderDashboard";
import MenuView from "../../views/Menu/Menu.jsx";
import ItemsView from "../../views/Items/Items.jsx";

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
          <Header />
          <Switch>
            <Route path="/dashboard/typography" component={TypographyView} />
            <Route path="/dashboard/menu/list" component={MenuView} />
            <Route path="/dashboard/menu/items" component={ItemsView} />
            <Route path="/dashboard" component={DashboardView} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;