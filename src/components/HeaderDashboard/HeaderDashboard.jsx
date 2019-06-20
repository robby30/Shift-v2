import React from "react";
import { Navbar, Nav, Container, NavbarBrand, Row } from "react-bootstrap";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import "./headerDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class HeaderDashboard extends React.Component {
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
  }

  componentDidMount(e) {}

  render() {
    return (
      <Row className="dashboard-header">
        <button
          expand="lg"
          type="button"
          ref="sidebarToggle"
          className="navbar-toggler"
          onClick={() => this.openSidebar()}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavbarBrand href="/dashboard">Dashboard</NavbarBrand>
      </Row>
    );
  }
}

export default HeaderDashboard;
