import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCount from "../counter/ItemCount"

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

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.desc}</p>
            <h4>Precio: $ {item.precio}</h4>

            <hr/>
            <ItemCount
            max={item.stock}
            contador={cantidad}
            setContador={setCantidad}
            agregarAlCarrito={agregarAlCarrito}
        />

        <button onClick={handleBack}>volver</button>
        </div>
    )
}

export default ItemDetail