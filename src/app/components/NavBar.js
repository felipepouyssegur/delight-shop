import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom'

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
              <NavDropdown.Item as={NavLink} to='/category/Buzos'>Hoodies</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Remeras'>Remeras</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Gorros'>Gorros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget /> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;