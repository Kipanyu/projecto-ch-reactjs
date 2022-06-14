
import Contacto from '../Contacto/Contacto'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import  {Pie} from '../footer/Pie';
import {Barra} from '../navbar/NavBar';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../cart/Cart';
import {Routes, Route, Navigate} from 'react-router-dom'
import UserInfo from '../UserInfo/UserInfo';

const PrivateRoutes = () => {

    return (
        <>
            <Barra />
            <UserInfo />
                <Routes>
                    <Route path='/' element={ <ItemListContainer/> }/>  
                    <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>          
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/contacto' element={ <Contacto /> } />
                    <Route path='*' element={ <Navigate to={"/"} /> } />
                </Routes>
            <Pie/>
        </>
    )
}

export default PrivateRoutes