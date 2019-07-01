import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Table, Row,  Col, Button } from "reactstrap";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import { deleteMenuItem, formReset } from "../../actions/menuActions";

class MenuList extends React.Component {
  
  state = {
    search: "",
    categoryFilter: null,
    sortBy: null,
    hasError: false
  };

  flag = 0;
  filterMenu = menu => {
    // console.log(menu, "t");
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

  deleteItemHandler = menuId => {
    if (menuId) {
      this.props.deleteMenuItem(this.props.uid, menuId);
    } else {    
      this.props.menuList.forEach(menu => {
      var text = document.getElementById(menu.id);
      if (text.checked) {
        // console.log(menu.id)
        this.props.deleteMenuItem(this.props.uid, menu.id);
      }
    });
    }
  };

  render() {
    const { menuList, categoryList, deleteMenu } = this.props;
    // if (deleteMenu) {
    //   this.setState({ search: "" });
    // }
    let filteredMenu = menuList && [...menuList];
    //this.setState({ sortedMenu: filteredMenu });
    //console.log(this.state.search);
    // console.log(this.state.menuList);
    return (
      <div className="content">
        <Row>
          <Col xs={11} sm={11} className="mx-auto my-4">
            <Row>
              <div>
                <h4>Menu</h4>
              </div>
              <div className="ml-auto">
                <Button className="mr-2" onClick={() => this.deleteItemHandler()}> Delete Item </Button>

                <Button color="dark">
                  <NavLink
                    to="/dashboard/menu/items"
                    className="nav-link table-link"
                    activeClassName="active"
                  >
                    <p>Add Item</p>
                  </NavLink>
                </Button>
              </div>
            </Row>

            <Card className="menu-table my-4">
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
                        <input type="checkbox" id="checkAll" onClick={this.allCheck} />{" "}
                      </th>
                      <th id="name" onClick={this.changeSort}> Name<span>^</span>{" "} </th>
                      <th id="price" onClick={this.changeSort}> Price </th>
                      <th id="category" onClick={this.changeSort}> Category </th>
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
                                {/* <img src={menu.file} alt={menu.name} height="30px"/> */}
                                <NavLink to={`list/${menu.id}`}>
                                  {menu.name}
                                </NavLink>
                              </td>
                              <td>${menu.price}</td>
                              <td>{menu.category}</td>
                              <td>
                                <Popup trigger={<FontAwesomeIcon icon="trash" />} modal closeOnDocumentClick>
                                  {close => (
                                    <div>
                                      <h1>
                                        Are you sure you want to delete{" "}
                                        {menu.name}?
                                      </h1>
                                      <Button
                                        color="dark"
                                        onClick={() => {
                                          this.deleteItemHandler(menu.id);
                                        }}>
                                        <p>Yes</p>
                                      </Button>
                                      <Button color="dark">
                                        <p>No</p>
                                      </Button>
                                    </div>
                                  )}
                                </Popup>
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.menu);
  return {
    uid: state.firebase.auth.uid,
    deleteMenu: state.menu.deleteMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMenuItem: (id, menuId) => dispatch(deleteMenuItem(id, menuId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuList);
