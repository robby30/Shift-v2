import React from "react";
import { Navbar, Nav, NavDropdown,  Container} from "react-bootstrap";
import Logo from "../../assets/images/logo.svg";

class Header extends React.Component {
  render() {
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
          {' Shift'}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>);
  }
}

export default Header;
