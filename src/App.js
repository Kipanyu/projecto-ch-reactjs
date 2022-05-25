import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { Barra } from './components/navbar/NavBar.js';
import { Nosotros } from './components/nosotros/Nosotros.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'


import { Pie } from './components/footer/Pie.js'


function App() {

  const usuario = {
    nombre: 'usuario'
  }

  return (
    <div >
        <Barra/>
        
        <ItemListContainer nombre={usuario.nombre}/>
        <Pie/>
    </div>
  );
}

export default App;
