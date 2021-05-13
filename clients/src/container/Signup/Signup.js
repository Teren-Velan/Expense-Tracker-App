import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input/Input";

function Signup(props) {
  return (
    <Layout>
    <Container>
      <Row style={{marginTop:"70px"}}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Row>
              <Col md={6}>
              <Input label= "First Name"
                      value= ""
                      type= "text"
                      placeholder= "First Name"
                      onChange={() => {}} 
                      />
              </Col>
              <Col md={6}>
              <Input label= "Last Name"
                      value= ""
                      type= "text"
                      placeholder= "Last Name"
                      onChange={() => {}} 
                      />
              </Col>
            </Row>
            <Input label= "Email"
                      value= ""
                      type= "text"
                      placeholder= "Email"
                      onChange={() => {}} 
                      />
            <Input label= "Password"
                      value= ""
                      type= "password"
                      placeholder= "Password"
                      onChange={() => {}} 
                      />
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
  )
}

export default Signup
