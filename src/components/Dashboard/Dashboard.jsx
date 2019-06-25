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
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./dashboard.css";
class Dashboard extends React.Component {
  state = {};

  render() {
    const { isLoaded, name, menu, category } = this.props;
    if (isLoaded) {
      return (
        <div className="wrapper">
          <Sidebar {...this.props} />
          <div className="main-panel" ref="mainPanel">
            <Header />
            <div className="dashboard-content ">
              <Switch>
                <Route path="/dashboard/typography" component={TypographyView} />
                <Route 
                  path="/dashboard/menu/list" 
                  render={props => <MenuView {...props} menuList={ menu } categoryList={ category }/>}
                />
                <Route 
                  path="/dashboard/menu/items" 
                  render={props => <ItemsView {...props} categories={ category } />}
                />
                <Route
                  path="/dashboard"
                  render={(props) => <DashboardView {...props} name={ name } />}
                />
              </Switch>
            </div>
          </div>
        </div>
      );
    }
    return <div className="wrapper" />;
  }
}

const mapStateToProps = state => {
  const auth = state.firebase.auth;
  const store = state.firestore.ordered;
  return {
    isLoaded: auth.isLoaded,
    id: auth.uid,
    name: store.company && store.company[0].name,
    menu: store.company && store.company[0].menu,
    category: store.company && store.company[0].category
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return props.id ? [
      {
        collection: "company",
        doc: props.id
      },
      {
        collection: "company",
        doc: props.id,
        subcollections: [{ collection: "menu" }]
      },
      {
        collection: "company",
        doc: props.id,
        subcollections: [{ collection: "category" }]
      }
    ] : [];
  })
)(Dashboard);
