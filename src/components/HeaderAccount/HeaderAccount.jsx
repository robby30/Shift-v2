import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from "prop-types";

class HeaderAccount extends Component {

  render() {
    if (this.props.authid) {
      return (
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
        </NavDropdown>)
    } else {
      return (
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
        </NavDropdown>
      );
    }
  }
}

HeaderAccount.propTypes = {
  authid: PropTypes.bool
};

export default HeaderAccount;
