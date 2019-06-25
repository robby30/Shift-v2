import React from "react";
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
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { NavLink } from "react-router-dom";
import "./Menu.css";
class MenuList extends React.Component {

  state = {
    search: ""
  };

  flag = 0;
  filterMenu = menu => {
    var name = menu.name.toUpperCase().includes(this.state.search.toUpperCase());
    var category = menu.category.toUpperCase().includes(this.state.search.toUpperCase());

    var searchResult = document.getElementById("searchResult");
    var table = document.getElementById("table");

    if (!name && !category && this.flag) {
      document.getElementById("checkAll").checked = false;
      searchResult.style.display = "block";
      table.style.display = "none";
    } else if (searchResult) {
      searchResult.style.display = "none";
      table.style.display = "table";
      this.flag = 0;    // at found, make found to 0
    }

    return name || category;
  };

  searchMenu = e => {
    this.flag = 1;  // everytime we type, flag will be 1
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
  
  render() {
    const { menuList } = this.props;

    let filteredMenu = menuList && [...menuList];
    //this.setState({ sortedMenu: filteredMenu });
    //console.log(this.state.search);
    //console.log(menuList);
    return (
      <div className="content">
        <Row>
          <Col xs={11} sm={11} className="mx-auto my-4">
            <Row>
              <div>
                <h4>Menu</h4>
              </div>
              <div className="ml-auto">
                <Button color="dark">
                  <NavLink to="/dashboard/menu/items" className="nav-link table-link" activeClassName="active">
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
                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="search-button-right">
                        Filter
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {/* map all category */}
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <input type="text" id="search" className="form-control" placeholder="Search menu" onChange={this.searchMenu} />
                </div>
              </CardHeader>
              <CardBody className="menu-table-body">
                <div id="searchResult" className="display-none"> test </div>
                <Table responsive id="table">
                  <thead className="text-primary">
                    <tr className="menu-table-heading">
                      <th><input type="checkbox" id="checkAll" onClick={this.allCheck} /> </th>
                      <th>Name<span>^</span> </th>
                      <th>Price</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMenu &&
                      filteredMenu.filter(this.filterMenu).map(menu => {
                        return (
                          <tr key={menu.id}>
                            <td>
                              <input type="checkbox" id={menu.id} />
                            </td>
                            <td>{menu.name}</td>
                            <td>${menu.price}</td>
                            <td>{menu.category}</td>
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


export default connect()(MenuList);
