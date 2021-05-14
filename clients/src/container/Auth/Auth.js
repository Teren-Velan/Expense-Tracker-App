import React from "react";
import { Tab, Col, Row, Nav, Sonnet, Container } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

function Auth({ setToken }) {
  return (
    <Layout>
      <Container style={{marginTop:"150px" ,  }}>
          <h1>Welcome to Common Cents</h1>
          
        <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
          <Row >
            <Col sm={3}>
              <Nav variant="pills" className="flex-column" style={{marginTop:"150px"}}>
                <Nav.Item>
                  <Nav.Link eventKey="first">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Login</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col  sm={9}>
              <Tab.Content >
                <Tab.Pane eventKey="first">
                  <Signup  setToken={setToken} />
                </Tab.Pane>
                <Tab.Pane  eventKey="second">
                  <Signin setToken={setToken} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Layout>
  );
}

export default Auth;
