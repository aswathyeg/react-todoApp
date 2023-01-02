import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./App.css";

const Header = () => {
  return (
    <div>
      <Navbar
        style={{ height: 60 }}
        className="nav-class"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand variant="light">Docket App</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
