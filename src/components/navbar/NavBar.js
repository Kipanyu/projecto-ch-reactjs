import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import './navbar.scss'



import { CartWidget } from '../carrito/CartWidget'

export const Barra = () => {
//     let  mainListDiv = document.getElementById("mainListDiv")
//     let mediaButton = document.getElementById("mediaButton")

//     mediaButton.onclick = function () {
    
    
//     mainListDiv.classList.toggle("show_list");
//     mediaButton.classList.toggle("active");
    
// };
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" >
  <Container >
  <Navbar.Brand href="#home">Mi Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  
  <Navbar.Collapse id="responsive-navbar-nav">
      
    <Nav className="me-auto" id="navBarCustom">
        
      <Nav.Link href="#features">Peoductos</Nav.Link>
      <Nav.Link href="#pricing">Categorias</Nav.Link>
      
    </Nav>
    <Nav>
    <Nav.Link href="#cart" id="carrito"><CartWidget/></Nav.Link>
    <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              
              <Button variant="outline-success">Search</Button>
            </Form>
    </Nav>
  </Navbar.Collapse>

  </Container>
</Navbar>
    
    )
}

