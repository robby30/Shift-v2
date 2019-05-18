import React from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap"

class LandingPage extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row style={{ minHeight: '700px'}}>
          <Col sm={{span:"6", offset:"2"}} className="my-auto">
            <h1>Shift your priorities</h1>
            <p className="lead">We need a background image behind here</p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={{span:"4", offset:"2"}} className="text-center row-border">
            <h4>Interested to join?</h4>
            <p>
              Sunset is the time of day when our sky meets the outer space solar
              winds. There are blue, pink, and purple swirls, spinning and
              twisting, like clouds of balloons caught in a whirlwind.
            </p>
          </Col>
          <Col md="4" className="text-center">
            <h4>Hello World</h4>
            <p>
              The sun moves slowly to hide behind the line of horizon, while the
              moon races to take its place in prominence atop the night sky.
            </p>
          </Col>
        </Row>

        <Row className="pricing-plans">
          <Container>
            <div className="text-center">
              <h2>Pricing & Plans</h2>
              <p className="text-muted">
                Different plans for different The sun moves slowly to hide
                behind the line of horizon.
              </p>
            </div>
          </Container>

          <Container className="my-5">
            <CardDeck>
              <Card className="text-center">
                <Card.Header as="h5">Mini Plan</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>Some more text to increase the height</p>
                    <p>Some more text to increase the height</p>
                    <p>Some more text to increase the height</p>
                  </Card.Text>
                  <Button variant="primary">Go mini</Button>
                </Card.Body>
                <Card.Footer className="text-muted">$15 / Month.</Card.Footer>
              </Card>
              <Card className="text-center">
                <Card.Header as="h5">Standard Plan</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>Some more text to increase the height</p>
                    <p>Some more text to increase the height</p>
                    <p>Some more text to increase the height</p>
                  </Card.Text>
                  <Button variant="primary">Go standard</Button>
                </Card.Body>
                <Card.Footer className="text-muted">$25 / Month</Card.Footer>
              </Card>
              <Card className="text-center">
                <Card.Header as="h5">Premium Plan</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>Some more text to increase the height</p>
                    <p>Some more text to increase the height</p>
                    <p>Some more text to increase the height</p>
                  </Card.Text>
                  <Button variant="success">Go Premium</Button>
                </Card.Body>
                <Card.Footer className="text-muted">$50 / Month</Card.Footer>
              </Card>
            </CardDeck>
          </Container>
        </Row>
      </Container>
    );
  }

}

export default LandingPage;