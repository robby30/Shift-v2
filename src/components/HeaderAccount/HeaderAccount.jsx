import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { connect } from "react-redux";
import { signOut } from "../../actions/action";

class HeaderAccount extends Component {
  render() {
    const { uid } = this.props.auth;
    if (uid) {
      return (
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
          <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
          <NavDropdown.Item onClick={this.props.signOut}>
            Log out
          </NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
        </NavDropdown>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderAccount);
