import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'
import gif from '../assets/img/gif.gif'

function BasicExample() {
  return (
    <Navbar bg="gray" expand="lg" className="fondo sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img src={gif} alt="gif delight" className="gif"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fondo">
            <Nav.Link as={NavLink} to='/delight-shop' className="navlink">Home</Nav.Link>
            <Nav.Link as={NavLink} to='/delight-shop' className="navlink">Catalogo</Nav.Link>
            <NavDropdown title="Ropa" id="basic-nav-dropdown" className="navlink">
              <NavDropdown.Item as={NavLink} to='/category/Buzos' className="navlink1">Hoodies</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Remeras' className="navlink1">Remeras</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Gorros' className="navlink1">Gorros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;