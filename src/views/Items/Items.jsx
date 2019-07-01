import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FormControl } from "react-bootstrap";
import { addMenuItem, formReset } from "../../actions/menuActions";

class Items extends Component {

  state = {
    name: "",
    price: "",
    category: -1,
    file: null,
    isLoading: false
  };

  uploadFileHandler = event => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file
      });
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = e => {
    this.setState({
      isLoading: true
    });
    this.props.addMenuItem(this.state, this.props.uid);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleOptionChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  componentDidUpdate() {
    const { addMenu, resetForm } = this.props
    if (addMenu) {
      this.setState({
        name: "",
        price: "",
        category: -1,
        file: "",
        isLoading: false
      });
      resetForm();
    }
  }

  render() {
    const { categoryList } = this.props;
    return (
      <Col xs="10" className="mx-auto py-5">
        <Card>
          <Form className="py-5 px-5">
            <Row>
              <Col xs="6">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control id="name" type="text" value={this.state.name} placeholder="Enter Item Name" onChange={this.handleChange}  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control  id="price" type="number" value={this.state.price} placeholder="Enter Price" onChange={this.handleChange} />
                  <Form.Text id="emailHelp" className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <FormControl id="category" as="select" placeholder="select" onChange={this.handleChange} value={this.state.category}>
                    <option value={-1} disabled> Select categories </option>
                    {categoryList &&
                      categoryList.map((category, index) => {
                        return (
                          <option key={index} value={category.name}>
                            {category.name}
                          </option>
                        );
                      })}
                  </FormControl>
                </Form.Group>
                <Button
                  variant="success"
                  disabled={this.state.isLoading}
                  onClick={!this.state.isLoading ? this.handleSubmit : null}
                >
                  {this.state.isLoading ? 'Loading…' : 'Submit'}
                </Button>
              </Col>
              <Col xs="6">
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" placeholder="Insert Image" onChange={this.uploadFileHandler} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Items);
