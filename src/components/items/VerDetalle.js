import { Modal, Button, Container } from "react-bootstrap";
import { useState } from "react";
import ItemCount from "../counter/ItemCount";
import './verdetalle.scss'

export const ViewDetail = ()  => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Ver Detalle del producto
        </Button>
  
        <Modal id="detalle" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Descripcion de prodcto</Modal.Body>
          <Modal.Footer >
            <Container variant>
                <ItemCount/>
            </Container>
            <Container variant="d-flex justify-content-around">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
            </Container>
            
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
