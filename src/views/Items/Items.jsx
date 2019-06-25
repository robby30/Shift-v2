import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FormControl } from "react-bootstrap"
import { addMenuItem, formReset } from "../../actions/menuActions";

class Items extends Component {
  state = {
    name: "",
    price: "",
    category: "",
    file: ""
  };

  handleSubmit = e => {
    this.props.addMenuItem(this.state, this.props.uid);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleOptionChange = e => {
    console.log(e.target.id)
    this.setState({
      category: e.target.value
    })
  }

  render() {
    const { addMenu, categories } = this.props;
    if (addMenu) {
      this.setState({
        name: "",
        price: "",
        category: "",
        file: ""
      });
      this.props.resetForm();
    }
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
                    value={this.state.name}
                    placeholder="Enter Item Name"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    id="price"
                    onChange={this.handleChange}
                    type="number"
                    value={this.state.price}
                    placeholder="Enter Price"
                  />
                  <Form.Text id="emailHelp" className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <FormControl
                    id="category"
                    as="select" 
                    placeholder="select"
                    onChange={this.handleChange}
                    defaultValue={-1}>
                      <option value={-1} disabled>Select categories</option>
                      {categories && categories.map((category, index) => {
                        return (<option key={index} value={index}>{category.name}</option>)
                      })}
                  </FormControl>
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
    addMenuItem: (menu, uid) => dispatch(addMenuItem(menu, uid)),
    resetForm: () => dispatch(formReset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
