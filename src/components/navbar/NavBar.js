import React from 'react'
import {NavDropdown, Navbar, Offcanvas, Form, Button, FormControl, CloseButton} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.scss'
import UserInfo from '../UserInfo/UserInfo'






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
          <Navbar.Brand href="/">StompStore</Navbar.Brand>
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
          <Offcanvas.Header variant='dark' className='link-light'   closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Stompstore
            <CartWidget id="carrito" />
            </Offcanvas.Title >
            <CloseButton variant='white'/>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className='link-light' href="/Contacto">Contacto</Nav.Link>
              <Nav.Link className='link-light' href="/ItemListContainer">Pedales</Nav.Link>
              
            
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
      </>
    )
}

export default Barra