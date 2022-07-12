import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import "./CartWidget.scss"

const CartWidget = () => {

    // const {totalQuantity} = useContext(CartContext)
    const {totalQuantity} = useCartContext()

    return (
        <Link to="/cart" className={`widget ${totalQuantity() === 0 ? 'widget-hidden' :''}`} id="cartscss">
            <FaShoppingCart/>
            <span>{totalQuantity()}</span>
        </Link>
    )
}

export default CartWidget