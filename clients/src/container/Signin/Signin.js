import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input/Input";

function Signin() {
  const [input, setinput] = useState("");

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "70px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email"
                value={input}
                type="text"
                placeholder="Email"
                onChange={() => {}}
              />
              <Input
                label="Password"
                value=""
                type="password"
                placeholder="Password"
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
  );
}

export default Signin;
