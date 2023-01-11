import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./Styles.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="header-container">
        <Navbar.Brand className="brand">Docket App</Navbar.Brand>
        <Nav className="nav-item">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Calender</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link> 
      </Nav.Item>*/}
      </Container>
    </Navbar>
  );
}

export default BasicExample;
