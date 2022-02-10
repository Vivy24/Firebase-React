import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Fragment } from "react";
const NavbarHeader = (props) => {
  return (
    <Navbar className="py-2" bg="light" expand="md">
      <Container>
        <Navbar.Brand className=" h5 " href="#home">
          <NavLink style={{ textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="base-navbar-nav" />
        <Navbar.Collapse id="base-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav className="justify-content-center">
            {props.logged ? (
              <Fragment>
                <Nav.Item>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="m-3"
                    to="/addBlog"
                  >
                    Add blog
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="m-3"
                    to="/logout"
                  >
                    Log out
                  </NavLink>
                </Nav.Item>
              </Fragment>
            ) : (
              <Fragment>
                <Nav.Item>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="m-3"
                    to="/login"
                  >
                    Log In
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="m-3"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </Nav.Item>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
