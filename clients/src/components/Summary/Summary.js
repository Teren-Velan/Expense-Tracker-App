import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Summary() {
  return (
    
    <Container style={{width:"800px"}} >
      <Row style={{ marginTop: "80px"}}>
        <Col md={4}>
          <Card style={{ width: "15rem" , boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
            <Card.Body>
              <Card.Title>Total Expenses</Card.Title>

              <Card.Text style={{fontSize:"35px" , color:"red"}}>
                $1200
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "15rem" , boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
            <Card.Body>
              <Card.Title>Current Balance</Card.Title>

              <Card.Text style={{fontSize:"35px"}}>
               $1500
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "15rem" , boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
            <Card.Body>
              <Card.Title>Total Income</Card.Title>

              <Card.Text style={{fontSize:"35px" , color:"green"}}>
                $2700
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
