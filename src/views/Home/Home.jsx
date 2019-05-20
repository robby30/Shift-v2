import React, {Component} from "react";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap"
import "./Home.css"

class Home extends Component {

  render() {
    return (
      <div>
        <Row className="homepage-banner">
          <Container>
            <Row className="h-100">
              <Col sm={{span:"6", offset:"2"}} className="my-auto">
                <h1>Shift your priorities</h1>
                <p className="lead">We need a background image behind here</p>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="my-5">
          <Col md={{span:"4", offset:"2"}} text-center className="row-border">
            <h4>Interested to join?</h4>
            <p>
              Sunset is the time of day when our sky meets the outer space solar
              winds. There are blue, pink, and purple swirls, spinning and
              twisting, like clouds of balloons caught in a whirlwind.
            </p>
          </Col>
          <Col md="4" text-center>
            <h4>Hello World</h4>
            <p>
              The sun moves slowly to hide behind the line of horizon, while the
              moon races to take its place in prominence atop the night sky.
            </p>
          </Col>
        </Row>

        <Row className="pricing-plans">
          <Container className="mt-4">
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
              <Card className="card-mini">
                <Card.Body text-center>
                  <h4 className="heading-mini">Mini Plan</h4>
                  <p className="text-muted">$15 / Month.</p>
                  <Button variant="info" className="mb-4">
                    Go Mini!
                  </Button>
                  <Card.Text className="card-border">
                    <i
                      className="fa fa-check heading-mini"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-mini"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-mini"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text className="heading-mini">Read more...</Card.Text>
                </Card.Body>
              </Card>
              <Card className="card-standard">
                <Card.Body text-center>
                  <h4 className="heading-standard">Standard Plan</h4>
                  <p className="text-muted">$25 / Month.</p>
                  <Button variant="primary" className="mb-4">
                    Go Standard!
                  </Button>
                  <Card.Text className="card-border">
                    <i
                      className="fa fa-check heading-standard"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-standard"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-standard"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-standard"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text className="heading-standard">Read more...</Card.Text>
                </Card.Body>
              </Card>
              <Card className="card-premium">
                <Card.Body className="text-center">
                  <h4 className="heading-premium">Premium Plan</h4>
                  <p className="text-muted">$50 / Month.</p>
                  <Button variant="success" className="mb-4">
                    Go Premium!
                  </Button>
                  <Card.Text className="card-border">
                    <i
                      className="fa fa-check heading-premium"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-premium"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-premium"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-premium"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text>
                    <i
                      className="fa fa-check heading-premium"
                      aria-hidden="true"
                    />{" "}
                    Some more text to increase the height
                  </Card.Text>
                  <Card.Text className="heading-premium">Read more...</Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </Row>
      </div>
    );
  }

}

export default Home;