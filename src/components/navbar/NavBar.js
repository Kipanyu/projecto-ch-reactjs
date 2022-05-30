import './navbar.scss'
import {NavDropdown, Navbar,} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { CartWidget } from '../carrito/CartWidget'





export const Barra = () => {
//     let  mainListDiv = document.getElementById("mainListDiv")
//     let mediaButton = document.getElementById("mediaButton")

//     mediaButton.onclick = function () {
    
    
//     mainListDiv.classList.toggle("show_list");
//     mediaButton.classList.toggle("active");
    
// };
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="gradiente">
  <Container>
  <Navbar.Brand href="#home">Mi Ecommerce</Navbar.Brand>
  <CartWidget id="carrito"/>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">categoria1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">catergoria2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">categoria3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">linnpmk</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        categoria
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

