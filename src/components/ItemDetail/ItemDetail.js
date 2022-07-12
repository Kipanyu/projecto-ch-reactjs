import { useState, useContext } from "react"
import { Card } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCount from "../counter/ItemCount"
import { Button } from "react-bootstrap"

const ItemDetail = ({item}) => {

    const {addItem, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    const agregarAlCarrito = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart)
    }


    return (
        <Card variant="top" id="foto_producto" style={{width: '18rem'}}>
             <Card.Img variant="top" id="foto_producto" src={item.img}/>
            <Card.Body className="img-fluid text-center">
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text>Stock: {item.stock}</Card.Text>
                <Card.Text>{item.precio}</Card.Text>
                
                <hr/>
            {
                isInCart(item.id)
                ? <Link to="/cart" className="btn btn-dark my-3">Terminar mi compra</Link>
                :
                    <ItemCount 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={agregarAlCarrito}
                    />
            }
                </Card.Body>
                <Button onClick={handleBack} variant="light">volver</Button>
        </Card>
    )
}

export default ItemDetail