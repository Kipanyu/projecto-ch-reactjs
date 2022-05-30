import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { Barra } from './components/navbar/NavBar.js';
import { Carrusel } from './components/Carousel/Carousel.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemCount } from './components/counter/ItemCount.js'
import { Pie } from './components/footer/Pie.js'


function App() {

  const usuario = {
    nombre: 'usuario'
  }

  return (
    <div >
        <Barra/>
        <br/>
        <ItemListContainer nombre={usuario.nombre}/>
        <ItemCount />
        <Pie/>
    </div>
  );
}

export default App;
