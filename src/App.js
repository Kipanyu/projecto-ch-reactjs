import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import {Barra} from './components/navbar/NavBar.js';
import {Carrusel} from './components/Carousel/Carousel.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from './components/counter/ItemCount.js'
import {Pie} from './components/footer/Pie.js'
import {Container, Row, Col} from 'react-bootstrap';
import {Sidebar} from './components/sidebar/sidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';

function App() {

  const usuario = {
    nombre: 'usuario'
  }

  return (
    <BrowserRouter>
      <Barra/>
      <br/>
      <Routes>
        <Route path='/' element={ <ItemListContainer nombre={usuario.nombre}/>} />
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/ItemListContainer' element={<ItemListContainer/>}/>
      </Routes>
     
      <Pie/>
    </BrowserRouter>
  );
}

export default App;

// {/* <Col sm={3} ><Sidebar/> </Col> */} {/* <Col sm={9}> */}  {/* </Col> */}


// <Container>
// <Contacto/>
// <Row>

//   <ItemListContainer nombre={usuario.nombre}/>
// </Row>
// </Container>