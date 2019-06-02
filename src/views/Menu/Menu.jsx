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

class RegularTables extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={10} sm={10} className="mx-auto">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Menu List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nasi Goreng Kunyit</td>
                      <td>$15</td>
                      <td>Nasi Goreng</td>
                    </tr>
                    <tr>
                      <td>Nasi Goreng Kicap</td>
                      <td>$15</td>
                      <td>Nasi Goreng</td>
                    </tr>
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

export default RegularTables;
