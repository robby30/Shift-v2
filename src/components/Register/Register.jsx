import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/action";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      email: "",
      password: ""
    };
  }

  handleSignup = e => {
    this.props.signUp(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <Col md="5" className="mx-auto my-5">
        <Form>
          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              onChange={e => this.setState({ companyName: e.target.value })}
              type="text"
              placeholder="Enter Company"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              placeholder="Enter Email"
            />
            <Form.Text id="emailHelp" className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="success" onClick={this.handleSignup}>
            Signup
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
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
