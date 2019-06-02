import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import logo from "../../assets/images/logo.svg";
import "./sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <a href="/" className="logo-small">
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a href="/" className="logo-normal">
            <h4>Shift</h4>
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav vertical>
            <li className={this.activeRoute("/dashboard")}>
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active"
              >
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className={this.activeRoute("/menu")}>
              <NavLink
                to="/dashboard/menu/list"
                className="nav-link"
                activeClassName="active"
              >
                <p>Menu</p>
              </NavLink>
              <div>
                <ul>
                  <li>
                    <NavLink
                      to="/dashboard/menu/list"
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Menu List</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/menu/items"
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p>Items</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className={this.activeRoute("/typography")}>
              <NavLink
                to="/dashboard/typography"
                className="nav-link"
                activeClassName="active"
              >
                <p>Typography</p>
              </NavLink>
            </li>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
