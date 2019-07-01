import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import { FormControl, Dropdown } from "react-bootstrap";
import { addMenuItem, formReset } from "../../actions/menuActions";
import Popup from "reactjs-popup";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Items extends Component {
  
  state = {
    name: "",
    description: "",
    search: "",
    categoryFilter: null,
    sortBy: null,
    hasError: false,
    selectedItems: [
      { id: "s", name: "s", category: "d", price: "6", file: "ds" }
    ]
  };

  flag = 0;
  filterMenu = menu => {
    console.log(menu, "t");
    var name = menu.name
      .toUpperCase()
      .includes(this.state.search.toUpperCase());
    var category = menu.category
      .toUpperCase()
      .includes(this.state.search.toUpperCase());

    var searchResult = document.getElementById("searchResult");
    var table = document.getElementById("table");

    if (!name && !category && this.flag) {
      document.getElementById("checkAll").checked = false;
      searchResult.style.display = "block";
      table.style.display = "none";
    } else if (searchResult) {
      searchResult.style.display = "none";
      table.style.display = "table";
      this.flag = 0; // at found, make found to 0
    }

    return name || category;
  };

  searchMenu = e => {
    this.flag = 1; // everytime we type, flag will be 1
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  allCheck = () => {
    const { menuList } = this.props;
    var checkBox = document.getElementById("checkAll");

    menuList.forEach(menu => {
      var text = document.getElementById(menu.id);
      if (text) {
        if (checkBox.checked) {
          text.checked = true;
        } else {
          text.checked = false;
        }
      }
    });
  };

  filterByCategory = menu => {
    if (this.state.categoryFilter) {
      return menu.category === this.state.categoryFilter;
    } else {
      return menu;
    }
  };

  changeCategoryFilter = category => {
    this.setState({
      categoryFilter: category
    });
  };

  sortBy = (a, b) => {
    if (this.state.sortBy === "category") {
      if (a.category.toUpperCase() < b.category.toUpperCase()) return -1;
      if (a.category.toUpperCase() > b.category.toUpperCase()) return 1;
      return 0;
    } else if (this.state.sortBy === "price") {
      if (parseFloat(a.price) < parseFloat(b.price)) return -1;
      if (parseFloat(a.price) > parseFloat(b.price)) return 1;
      return 0;
    } else {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    }
  };

  changeSort = e => {
    this.setState({
      sortBy: e.target.id
    });
  };

  handleSubmit = e => {
    this.props.addMenuItem(this.state, this.props.uid);
  };

  addToCategoryHandler = () => {
    const { menuList } = this.props;
    var temp = [];
    menuList.forEach(menu => {
      var text = document.getElementById(menu.id);
      if (text) {
        if (text.checked) {
          temp.push(menu);
        }
      }
    });
    this.setState({
      selectedItems: this.state.selectedItems.concat(temp)
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { addMenu } = this.props;
    if (addMenu) {
      this.setState({
        name: "",
        description: ""
      });
      this.props.resetForm();
    }
    const { menuList, categoryList } = this.props;
    let filteredMenu = menuList && [...menuList];
    console.log(this.state.selectedItems);
    let selectedItems = [...this.state.selectedItems];
    console.log(filteredMenu);
    return (
      <Col xs="10" className="mx-auto py-5">
        <Card className="my-5">
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
                    placeholder="Enter Category Name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    id="description"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.description}
                    placeholder="Enter description"
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

        <Card className="my-5">
          <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            closeOnDocumentClick
          >
            <Card className="menu-table my-4">
              <Button color="dark" onClick={this.addToCategoryHandler}>
                <p>Add Item</p>
              </Button>
              <CardHeader>
                <div className="input-group mt-3 mb-3">
                  <div className="input-group-prepend">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="search-button-right"
                      >
                        Filter
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {/* map all category */}
                        <Dropdown.Item
                          onClick={() => this.changeCategoryFilter(null)}
                        >
                          All
                        </Dropdown.Item>
                        {categoryList &&
                          categoryList.map((category, index) => {
                            return (
                              <Dropdown.Item
                                key={index}
                                onClick={() =>
                                  this.changeCategoryFilter(category.name)
                                }
                              >
                                {category.name}
                              </Dropdown.Item>
                            );
                          })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search menu"
                    onChange={this.searchMenu}
                  />
                </div>
              </CardHeader>
              <CardBody className="menu-table-body">
                <div id="searchResult" className="display-none">
                  {" "}
                  test{" "}
                </div>
                <Table responsive id="table">
                  <thead className="text-primary">
                    <tr className="menu-table-heading">
                      <th>
                        <input
                          type="checkbox"
                          id="checkAll"
                          onClick={this.allCheck}
                        />{" "}
                      </th>
                      <th id="name" onClick={this.changeSort}>
                        Name<span>^</span>{" "}
                      </th>
                      <th id="price" onClick={this.changeSort}>
                        Price
                      </th>
                      <th id="category" onClick={this.changeSort}>
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMenu &&
                      filteredMenu
                        .filter(this.filterByCategory)
                        .filter(this.filterMenu)
                        .sort(this.sortBy)
                        .map(menu => {
                          return (
                            <tr key={menu.id}>
                              <td>
                                <input type="checkbox" id={menu.id} />
                              </td>
                              <td>
                                <img
                                  src={menu.file}
                                  alt={menu.name}
                                  height="
                                  30px"
                                />
                                <NavLink to={`list/${menu.id}`}>
                                  {menu.name}
                                </NavLink>
                              </td>
                              <td>${menu.price}</td>
                              <td>{menu.category}</td>
                            </tr>
                          );
                        })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Popup>
          <Form className="py-5 px-5">
            <Card className="menu-table my-4">
              <CardBody className="menu-table-body">
                <div id="searchResult" className="display-none">
                  {" "}
                  test{" "}
                </div>
                <Table responsive id="table">
                  <thead className="text-primary">
                    <tr className="menu-table-heading">
                      <th>
                        <input type="checkbox" id="checkAll" />{" "}
                      </th>
                      <th>Name </th>
                      <th>Price</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItems &&
                      selectedItems.map(menu => {
                        return (
                          <tr key={menu.id}>
                            <td>
                              <input type="checkbox" id={menu.id} />
                            </td>
                            <td>
                              <img
                                src={menu.file}
                                alt={menu.name}
                                height="
                                  30px"
                              />
                              <NavLink to={`list/${menu.id}`}>
                                {menu.name}
                              </NavLink>
                            </td>
                            <td>${menu.price}</td>
                            <td>{menu.category}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
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
