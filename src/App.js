import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { Barra } from './components/navbar/NavBar.js';
import { Carrusel } from './components/Carousel/Carousel.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemCount } from './components/counter/ItemCount.js'
import { Pie } from './components/footer/Pie.js'
import { Container, Row, Col } from 'react-bootstrap';
import {Sidebar} from './components/sidebar/sidebar';


function App() {

  const usuario = {
    nombre: 'usuario'
  }

  return (
    <div >
        <Barra/>
        <br/>
        <Container><Row>
    <Col sm={3}><Sidebar/></Col>
    <Col sm={9}><ItemListContainer nombre={usuario.nombre}/></Col>
  </Row></Container>
        
        <ItemCount />
        <Pie/>
    </div>
  );
}

export default App;
