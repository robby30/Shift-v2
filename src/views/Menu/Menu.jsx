import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./Menu.css";
class MenuList extends React.Component {
  render() {
    const { menuList } = this.props;
    console.log(menuList);
    return (
      <div className="content">
        <Row>
          <Col xs={11} sm={11} className="mx-auto my-4">
            <h4>Menu</h4>
            <Card className="menu-table">
              <CardHeader>
                {/* <ul className="category-selector">
                  <li>
                    <span>All</span>
                  </li>
                  <li>test</li>
                </ul> */}
                <ul className="category-selector">
                  <li>All</li>
                  <li>Cat1</li>
                </ul>
              </CardHeader>
              <CardBody className="menu-table-body">
                <Table responsive>
                  <thead className="text-primary">
                    <tr className="menu-table-heading">
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuList &&
                      menuList.map(menu => {
                        return (
                          <tr key={menu.id}>
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

const mapStateToProps = state => {
  const id = state.firebase.auth.uid;
  return {
    menuList:
      state.firestore.ordered.company &&
      state.firestore.ordered.company[0].menu,
    id
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    console.log(props);
    return [
      {
        collection: "company",
        doc: props.id,
        subcollections: [{ collection: "menu" }]
      }
    ];
  })
)(MenuList);
