import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";

import { Fragment } from "react";
const NavbarHeader = (props) => {
  const auth = getAuth();

  const navigate = useNavigate();

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("successfully");

        navigate("/");
      })
      .catch((error) => {
        console.log({ error });
      });
  };
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
            {props.isLoggedIn ? (
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
                  <Button onClick={logOutHandler}>Log out</Button>
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
