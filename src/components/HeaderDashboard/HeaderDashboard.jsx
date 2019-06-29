import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  Row,
  Col,
  Dropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import "./headerDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderDashboard extends React.Component {
  toggled = 1;
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
    if (this.toggled) {
      document.getElementById("sidebar-title").style.display = "none";
      document.getElementById("main-content-toggler").className =
        "main-content-closed";
      this.toggled = 0;
    } else {
      document.getElementById("sidebar-title").style.display = "block";
      document.getElementById("main-content-toggler").className =
        "main-content-open";
      this.toggled = 1;
    }
  }

  componentDidMount(e) {}

  render() {
    return (
      <Row className="dashboard-header">
        <div>
          <button
            expand="lg"
            type="button"
            ref="sidebarToggle"
            className="navbar-toggler"
            onClick={() => this.openSidebar()}
          >
            <FontAwesomeIcon icon="bars" />
          </button>
          <NavbarBrand href="/dashboard" className="dashboard-title">
            Dashboard
          </NavbarBrand>
        </div>
        <div className="header-icon ml-auto">
          <span>
            <FontAwesomeIcon icon="bell" className="dashboard-title" />
          </span>
          <span>
            <NavLink
              to="/dashboard/account-settings"
              className="nav-link"
              activeClassName="active"
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="search-button-right"
                >
                  <FontAwesomeIcon
                    icon="users-cog"
                    className="dashboard-title"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* map all category */}
                  <Dropdown.Item
                    onClick={() => this.changeCategoryFilter(null)}
                  >
                    All
                  </Dropdown.Item>
                  <Dropdown.Item key onClick />
                </Dropdown.Menu>
              </Dropdown>
            </NavLink>
          </span>
        </div>
      </Row>
    );
  }
}

export default HeaderDashboard;
