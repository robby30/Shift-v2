import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/action";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Price: "",
      Category: "",
      File: ""
    };
  }

  handleSignup = e => {
    this.props.signUp(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <Col xs="10" className="mx-auto my-5">
        <Form>
          <Row>
            <Col xs="5">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ Name: e.target.value })}
                  type="text"
                  placeholder="Enter Item Name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ Price: e.target.value })}
                  type="number"
                  placeholder="Enter Price"
                />
                <Form.Text id="emailHelp" className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col xs="5">
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ Category: e.target.files })}
                  type="file"
                  placeholder="Insert Image"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              onChange={e => this.setState({ Category: e.target.value })}
              type="text"
              placeholder="Enter Category"
            />
          </Form.Group>

          <Button variant="success" onClick={this.handleSignup}>
            Submit
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
