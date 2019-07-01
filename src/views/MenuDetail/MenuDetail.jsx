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

  constructor(props) {
    super(props);

    const { menuObject } = props;
    const id = this.props.match.params.id;
    const menu = menuObject && menuObject[id];
    this.state = menu ? 
      {
        name: menu.name,
        price: menu.price,
        category: menu.category,
        file: menu.file,
        isLoading: false
      } : {
        name: '',
        price: 0,
        category: -1,
        file: '',
        isLoading: false
      }
  }

  handleSubmit = e => {
    this.setState({
      isLoading: true
    })
    this.props.updateMenuItem(
      this.state,
      this.props.uid,
      this.props.match.params.id
    );
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

  deleteItemHandler = menuId => {
    this.props.deleteMenuItem(this.props.uid, menuId);
  };

  componentWillReceiveProps({ menuObject, updateMenu }) {
    const id = this.props.match.params.id;
    const menu = menuObject && menuObject[id]
    if (menu) {
      this.setState({
        name: menu.name,
        price: menu.price,
        category: menu.category,
        file: menu.file
      })
    }
    if (updateMenu) {
      this.props.formReset()
      this.setState({
        isLoading: false
      })
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   return false;
  // }
  render() {


    const {  categoryList } = this.props;
    return (
      <Col xs="10" className="mx-auto py-5">
        {/* <Button
          color="dark"
          onClick={() => {
            this.deleteItemHandler(menu.id);
          }}
        >
          <p>Yes</p>
        </Button> */}
        <Card>
          <Form className="py-5 px-5">
            <Row>
              <Col xs="6">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control id="name" type="text" value={this.state.name} placeholder="Enter Item Name" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control id="price" type="number" value={this.state.price} placeholder="Enter Price" onChange={this.handleChange} />
                  <Form.Text id="emailHelp" className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <FormControl id="category" as="select" placeholder="select" onChange={this.handleChange} value={this.state.category} >
                    <option value={-1} disabled>
                      Select categories
                    </option>
                    {categoryList &&
                      categoryList.map((category, index) => {
                        return (
                          <option key={category.name} value={category.name}>
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
                  {this.state.isLoading ? 'Loading…' : 'Update'}
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
    updateMenu: state.menu.updateMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMenuItem: (menu, uid, menuId) => dispatch(updateMenuItem(menu, uid, menuId)),
    deleteMenuItem: (id, menuId) => dispatch(deleteMenuItem(id, menuId)),
    formReset: () => dispatch(formReset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
