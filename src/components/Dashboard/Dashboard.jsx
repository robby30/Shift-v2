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
import MenuDetailView from "../../views/MenuDetail/MenuDetail.jsx";
import CategoryView from "../../views/Category/Category.jsx";
import OrdersView from "../../views/Orders/Orders.jsx";
import AccountView from "../../views/Account/AccountSettings.jsx";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Row, Col } from "react-bootstrap";
import "./dashboard.css";
class Dashboard extends React.Component {
  state = {};

  render() {
    const { isLoaded, name, menu, category } = this.props;
    if (isLoaded) {
      return (
        <div className="wrapper">
          <div className="main-panel" ref="mainPanel">
            <Header />
            <div className="wrapper dashboard-content">
              <Sidebar {...this.props} />

              <div id="main-content-toggler" className="main-content-open">
                <Switch>
                  <Route
                    path="/dashboard/typography"
                    component={TypographyView}
                  />
                  <Route
                    path="/dashboard/account-settings"
                    render={props => <AccountView {...props} name={name} />}
                  />

                  <Route
                    path="/dashboard/menu/list/:id"
                    render={props => (
                      <MenuDetailView
                        {...props}
                        menuList={menu}
                        categoryList={category}
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/menu/list"
                    render={props => (
                      <MenuView
                        {...props}
                        menuList={menu}
                        categoryList={category}
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/menu/items"
                    render={props => (
                      <ItemsView {...props} categories={category} />
                    )}
                  />
                  <Route
                    path="/dashboard/menu/category"
                    render={props => (
                      <CategoryView
                        {...props}
                        menuList={menu}
                        categoryList={category}
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/orders"
                    render={props => (
                      <OrdersView
                        {...props}
                        menuList={menu}
                        categoryList={category}
                      />
                    )}
                  />
                  <Route
                    path="/dashboard"
                    render={props => <DashboardView {...props} name={name} />}
                  />
                </Switch>
              </div>
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
  console.log(store.company && store.company[0].menu, "name");
  console.log(store.company && store.company[0].category, "cate");
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
    return props.id
      ? [
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
        ]
      : [];
  })
)(Dashboard);
