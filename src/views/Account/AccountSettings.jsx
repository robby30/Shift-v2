import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FormControl } from "react-bootstrap";
import { updateCompanyDetails, formReset } from "../../actions/menuActions";
import { jsxClosingElement } from "@babel/types";

class AccountSettings extends Component {
  state = {
    name: ""
  };

  handleSubmit = e => {
    this.props.updateCompanyDetails(this.state, this.props.uid);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleOptionChange = e => {
    console.log(e.target.id);
    this.setState({
      category: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.name });
  }

  componentWillMount() {
    this.setState({ name: this.props.name });
  }

  render() {
    return (
      <Col xs="10" className="mx-auto py-5">
        <Card>
          <Form className="py-5 px-5">
            <Row>
              <Col xs="6">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    id="name"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.name || ""}
                    placeholder={"Enter Item Name"}
                  />
                </Form.Group>

                <Button variant="success" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Col>
              <Col xs="6">
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Insert Image" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    addMenu: state.menu.addMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCompanyDetails: (companyDetail, uid) =>
      dispatch(updateCompanyDetails(companyDetail, uid)),
    resetForm: () => dispatch(formReset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);
