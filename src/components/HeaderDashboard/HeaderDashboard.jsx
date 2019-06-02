import React from "react";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import "./headerDashboard.css";

class HeaderDashboard extends React.Component {
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
  }

  componentDidMount(e) {}

  render() {
    return (
      <Container className="dashboard-header">
        <button
          type="button"
          ref="sidebarToggle"
          className="navbar-toggler"
          onClick={() => this.openSidebar()}
        >
          button
        </button>
        <NavbarBrand href="/dashboard">Dashboard</NavbarBrand>
      </Container>
    );
  }
}

export default HeaderDashboard;
