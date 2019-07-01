import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Row, Col } from "reactstrap";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <nav className="sidebar">
        {/* <div className="logo">
          <a href="/" className="logo-small">
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a href="/" className="logo-normal">
            <h4>Shift</h4>
          </a>
        </div> */}
        <div className="sidebar-wrapper" ref="sidebar">
          <Row>
            <Col sm={4} className="mx-0 px-0">
              <Nav vertical>
                <li className={this.activeRoute("/dashboard")}>
                  <NavLink
                    to="/dashboard"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <FontAwesomeIcon
                      icon="address-card"
                      className="sidebar-icon"
                    />
                  </NavLink>
                </li>
                <li className={this.activeRoute("/menu")}>
                  <NavLink
                    to="/dashboard/menu/list"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <FontAwesomeIcon
                      icon="book-open"
                      className="sidebar-icon"
                    />
                  </NavLink>
                </li>

                {/* <li>
                  <NavLink
                    to="/dashboard/menu/items"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <FontAwesomeIcon icon="utensils" className="sidebar-icon" />
                  </NavLink>
                </li> */}
              </Nav>
            </Col>
            <Col sm={8} className="ml-0 pl-0" id="sidebar-title">
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
                    <ul className="sub-list">
                      <li>
                        <NavLink
                          to="/dashboard/menu/list"
                          className="nav-link sub-items"
                          activeClassName="active"
                        >
                          <p>Menu List</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/menu/items"
                          className="nav-link sub-items"
                          activeClassName="active"
                        >
                          <p>Items</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/dashboard/menu/category"
                          className="nav-link sub-items"
                          activeClassName="active"
                        >
                          <p>Category</p>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={this.activeRoute("/orders")}>
                  <NavLink
                    to="/dashboard/orders"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <p>Orders</p>
                  </NavLink>
                </li>
              </Nav>
            </Col>
          </Row>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
