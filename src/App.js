import './styles.css';
import { NavBar } from './components/navbar/NavBar.js';
import { Nosotros } from './components/nosotros/Nosotros.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'


import { Pie } from './components/footer/Pie.js'


function App() {

  const usuario = {
    nombre: 'usuario'
  }

  return (
    <div >
        <NavBar/>
        <Nosotros titulo="hola mundo" content="probando props"/>
        <ItemListContainer nombre={usuario.nombre}/>
        <Pie/>
    </div>
  );
}

export default App;
