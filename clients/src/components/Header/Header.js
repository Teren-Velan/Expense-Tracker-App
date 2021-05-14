import React from "react";
import {Navbar , Nav , Container} from 'react-bootstrap'
import {NavLink , Link} from "react-router-dom"

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/" className="navbar-brand">Common Cents</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <li className="nav-item">
              {/* <NavLink to="/signin" className="nav-link" >Sign In</NavLink> */}
            </li>
            <li className="nav-item">
              {/* <NavLink  to="/" className="nav-link">Sign Up</NavLink> */}
            </li>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
