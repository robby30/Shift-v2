import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.svg";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import { connect } from "react-redux";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
            {" Shift"}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <HeaderAccount />
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Header);
