import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signIn } from "../../actions/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSignIn = e => {
    // console.log(this.state);
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { uid } = this.props.auth;

    if (uid) {
      return <Redirect to="/" />;
    }
    return (
      <Col md="4" className="mx-auto my-5">
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <Form.Text id="emailHelp" className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button varian="primary" onClick={this.handleSignIn}>
            Login
          </Button>
        </Form>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
