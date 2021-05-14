import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input/Input";
import Axios from "axios";
import {useHistory } from "react-router-dom";
import PropTypes from 'prop-types';


function Signup({setToken}) {
  let history = useHistory();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3000/api/v1/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: emailReg,
      password: passwordReg,
    }).then((res) => {
      console.log("res.data:", res.data);
      setToken(res.data.token)
      //  console.log("res.data.token:", res.data.token);
      history.push("/home");
    });
  };




  return (
    // <Layout>
      <Container>
        <Row style={{ marginTop: "70px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setemailReg(e.target.value);
                }}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setpasswordReg(e.target.value);
                }}
              />

              <Button block onClick={handleSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    // </Layout>
  );
}

Signup.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Signup;
