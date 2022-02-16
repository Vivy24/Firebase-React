import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotAuthorize = () => {
  return (
    <Container style={{ marginTop: "200px" }}>
      <h3>Welcome to Blog Created</h3>
      <p>Please log in to create your blog or view other user blog</p>

      <Button variant="primary" style={{ marginRight: "20px" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/login"
        >
          Log In
        </Link>
      </Button>

      <Button variant="primary">
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          Register
        </Link>
      </Button>
    </Container>
  );
};

export default NotAuthorize;
