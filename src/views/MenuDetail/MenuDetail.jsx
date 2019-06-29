import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FormControl } from "react-bootstrap";
import {
  updateMenuItem,
  formReset,
  deleteMenuItem
} from "../../actions/menuActions";

class Items extends Component {
  pos =
    this.props.menuList &&
    this.props.menuList
      .map(function(e) {
        return e.id;
      })
      .indexOf(this.props.match.params.id);

  menu = this.props.menuList && this.props.menuList[this.pos];

  posCat =
    this.props.categoryList &&
    this.props.categoryList
      .map(function(e) {
        return e.name;
      })
      .indexOf(this.props.menuList[this.pos].category);

  state = {
    name: this.menu && this.menu.name,
    price: this.menu && this.menu.price,
    category: this.menu && this.menu.category,
    file: ""
  };

  handleSubmit = e => {
    this.props.updateMenuItem(
      this.state,
      this.props.uid,
      this.props.match.params.id
    );
  };

  handleChange = e => {
    this.posCat = e.target.value;
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

  deleteItemHandler = menuId => {
    this.props.deleteMenuItem(this.props.uid, menuId);
  };

  // shouldComponentUpdate(nextProps) {
  //   return false;
  // }
  render() {
    const { addMenu, categoryList, menuList } = this.props;
    if (addMenu) {
      this.setState({
        name: "",
        price: "",
        category: "",
        file: ""
      });
      this.props.resetForm();
    }
    console.log(this.props.menuList, "l");
    const pos =
      menuList &&
      menuList
        .map(function(e) {
          return e.id;
        })
        .indexOf(this.props.match.params.id);
    console.log(pos, "pos");

    const menu = menuList && menuList[pos];
    const posCat =
      categoryList &&
      categoryList
        .map(function(e) {
          return e.name;
        })
        .indexOf(menuList[pos].category);
    console.log(posCat, "t");
    console.log(categoryList && categoryList[posCat], "sfsd");
    return (
      <Col xs="10" className="mx-auto py-5">
        <Button
          color="dark"
          onClick={() => {
            this.deleteItemHandler(menu.id);
          }}
        >
          <p>Yes</p>
        </Button>
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
                    defaultValue={categoryList && categoryList[posCat].name}
                  >
                    <option value={-1} disabled>
                      Select categories
                    </option>
                    {categoryList &&
                      categoryList.map((category, index) => {
                        console.log(category.name, index);
                        return (
                          <option key={category.name} value={category.name}>
                            {category.name}
                          </option>
                        );
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
    updateMenuItem: (menu, uid, menuId) =>
      dispatch(updateMenuItem(menu, uid, menuId)),
    resetForm: () => dispatch(formReset()),
    deleteMenuItem: (id, menuId) => dispatch(deleteMenuItem(id, menuId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
