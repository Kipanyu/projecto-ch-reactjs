import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { Barra } from './components/navbar/NavBar.js';
import { Carrusel } from './components/Carousel/Carousel.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { Counter } from './components/counter/Counter.js'
import { Pie } from './components/footer/Pie.js'


function App() {

  const usuario = {
    nombre: 'usuario'
  }

  return (
    <div >
        <Barra/>
        <br/>
        <Carrusel/>
        <ItemListContainer nombre={usuario.nombre}/>
        <Counter />
        <Pie/>
    </div>
  );
}

export default App;
