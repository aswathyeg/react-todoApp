import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./Styles.css";
function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="header-container">
        <Nav
          activeKey="/home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Calender</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link> 
      </Nav.Item>*/}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
