import React from "react";
import { Navbar, Nav, Container, NavbarBrand, Row, Col } from "react-bootstrap";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import "./headerDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HeaderDashboard extends React.Component {
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
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
            <FontAwesomeIcon icon="users-cog" className="dashboard-title" />
          </span>
        </div>
      </Row>
    );
  }
}

export default HeaderDashboard;
