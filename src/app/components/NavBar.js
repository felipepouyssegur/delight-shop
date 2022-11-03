import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Delight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>
            <NavDropdown title="Ropa" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sin capucha
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Remeras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Gorros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget /> {/* agrego cartwidget como hijo */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
