import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

class Register extends Component {
  render() {
    return (
      <Col md="5" className="mx-auto my-5">
        <Form>
          <Form.Group>
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Company"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"/>
            <Form.Text id="emailHelp" className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Button variant="success" onClick={this.handleSignup}>
            Signup
          </Button>
        </Form>
      </Col>
    );
  }
}

export default Register;