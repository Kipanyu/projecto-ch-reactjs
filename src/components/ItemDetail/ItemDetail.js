import { useState } from "react"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ItemCount from "../counter/ItemCount"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Item from "../items/Item"

const ItemDetail = ({item}) => {
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
        console.log(itemToCart)
    }

    // return (
    //     <div className="container my-5">
    //         <h2>{item.nombre}</h2>
    //         <img src={item.img} alt={item.nombre}/>
    //         <p>{item.desc}</p>
    //         <h4>Precio: $ {item.precio}</h4>

    //         <hr/>
    //         <ItemCount
    //         max={item.stock}
    //         contador={cantidad}
    //         setContador={setCantidad}
    //         agregarAlCarrito={agregarAlCarrito}
    //     />

    //     <button onClick={handleBack}>volver</button>
    //     </div>
    // )

    return (
        <Card variant="top" id="foto_producto" style={{width: '18rem'}}>
             <Card.Img variant="top" id="foto_producto" src={item.img}/>
            <Card.Body className="img-fluid text-center">
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text>Stock: {item.stock}</Card.Text>
                <Card.Text>{item.precio}</Card.Text>
                
                <ItemCount
                    max={item.stock}
                    contador={cantidad}
                    setContador={setCantidad}
                    agregarAlCarrito={agregarAlCarrito}/>
                </Card.Body>
                <Button onClick={handleBack} variant="light">volver</Button>
        </Card>
    )
}

export default ItemDetail