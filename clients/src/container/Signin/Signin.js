import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input/Input";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

function Signin({setToken}) {
  let history = useHistory();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  

const handleSubmitLogin = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3000/api/v1/auth/signin", {
      email: email,
      password: password,
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
              <Input
                label="Email"
                type="text"
                placeholder="Email"
                onChange={(e) => {setemail(e.target.value)}}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(e) => {setpassword(e.target.value)}}
              />

              <Button block onClick={handleSubmitLogin} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    // </Layout>
  );
}

Signin.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Signin;
