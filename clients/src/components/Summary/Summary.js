import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Summary() {
  return (
    // <Container style={{width:"900px"}} >
    <Container style={{width:"800px"}} >
      <Row style={{ marginTop: "80px"}}>
        <Col md={4}>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Total Expenses</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Current Balance</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>Total Income</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
