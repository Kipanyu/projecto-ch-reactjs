import { useCartContext } from "../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import EmptyCart from "./EmptyCart"
import './cart.scss'

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()

    if (cart.length === 0) return <EmptyCart/>

    return (
        <div className="container my-5">
            <h2  id='tuCompra'>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id} className="my-2" id="compra">
                        <h5>{item.nombre}</h5>
                        <p>Cantidad: {item.cantidad}</p>
                        <h6>Precio: ${item.precio * item.cantidad}</h6>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                        <hr/>
                    </div>
                ))
            }

            <h4>TOTAL: ${totalPrice()}</h4>
            <div id="botonesCompra">
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-dark mx-4">Terminar mi compra</Link>
            </div>
        </div>
    )
}

export default Cart