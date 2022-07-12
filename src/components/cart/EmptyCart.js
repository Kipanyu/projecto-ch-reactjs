import { Link } from "react-router-dom"
import "./cart.scss"

const EmptyCart = () => {

    return (
        <div className="container my-5" id="empty">
            <h2>Tu carrito está vacío</h2>
            <hr/>

            <Link to="/" className="btn btn-dark">Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart