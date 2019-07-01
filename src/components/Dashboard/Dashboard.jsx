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

  render() {
    const { isLoaded, name, menuList, menuObject, categoryList, categoryObject } = this.props;
    if (isLoaded) {
      return (
        <div className="wrapper">
          <div className="main-panel" ref="mainPanel">
            <Header />
            <div className="wrapper dashboard-content">
              <Sidebar {...this.props} />

              <div id="main-content-toggler" className="main-content-open">
                <Switch>
                  <Route path="/dashboard/account-settings" render={props => (<AccountView    {...props} name={name} /> )} />
                  <Route path="/dashboard/menu/list/:id"    render={props => (<MenuDetailView {...props} categoryList={categoryList} categoryObject={categoryObject} menuObject={menuObject} /> )} />
                  <Route path="/dashboard/menu/list"        render={props => (<MenuView       {...props} categoryList={categoryList} menuList={menuList} /> )} />
                  <Route path="/dashboard/menu/items"       render={props => (<ItemsView      {...props} categoryList={categoryList} /> )} />
                  <Route path="/dashboard/menu/category"    render={props => (<CategoryView   {...props} categoryList={categoryList} menuList={menuList} /> )} />
                  <Route path="/dashboard/orders"           render={props => (<OrdersView     {...props} categoryList={categoryList} menuList={menuList} /> )} />
                  <Route path="/dashboard"                  render={props => (<DashboardView  {...props} name={name} /> )} />
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

const mapStateToProps = (state) => {
  const auth = state.firebase.auth;
  const profile = state.firebase.profile;
  const order_data = state.firestore.ordered;
  const object_data = state.firestore.data;
  // console.log(state.firestore.data.company_menu && state.firestore.data.company_menu.iONEcayI3q6YIL4FPr8R);
  return {
    isLoaded: auth.isLoaded,
    id: auth.uid,
    name: profile.name,
    menuList: order_data.company_menu,
    menuObject: object_data.company_menu,
    categoryList: order_data.company_category,
    categoryObject: object_data.company_category,
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
            subcollections: [{ collection: "menu" }],
            storeAs: 'company_menu'
          },
          {
            collection: "company",
            doc: props.id,
            subcollections: [{ collection: "category" }],
            storeAs: 'company_category'
          }
        ]
      : [];
  })
)(Dashboard);
