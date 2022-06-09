import React from 'react'
import {NavDropdown, Navbar, Offcanvas, Form, Button, FormControl} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { CartWidget } from '../carrito/CartWidget'
import './navbar.scss'





export const Barra = () => {
//     let  mainListDiv = document.getElementById("mainListDiv")
//     let mediaButton = document.getElementById("mediaButton")

//     mediaButton.onclick = function () {
    
    
//     mainListDiv.classList.toggle("show_list");
//     mediaButton.classList.toggle("active");
    
// };
    return (
      <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="gradiente">
        <Container>
          <Navbar.Brand href="#home">StompStore</Navbar.Brand>
          <CartWidget id="carrito" />
          
        </Container>
      </Navbar>
      
      

      {['md'].map((expand) => (
    <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
      <Container fluid >
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas  
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start" 
        >
          <Offcanvas.Header  closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Stompstore
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <CartWidget id="carrito" />
              <Nav.Link className='link-light' href="/">Home</Nav.Link>
              <Nav.Link className='link-light' href="/Contacto">Contacto</Nav.Link>
              <Nav.Link className='link-light' href="/ItemListContainer">Pedales</Nav.Link>
            
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
      </>
    )
}

