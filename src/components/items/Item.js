
import React from 'react'
import { Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import './verdetalle.scss'



export const Item = ({item}) => {

    // return (
    //     <div>
    //         <h2>{item.nombre}</h2>
    //         <img src={item.img}/>
    //         <p>{item.desc}</p>
    //         <h4>Precio: ${item.precio}</h4>
    //         <hr/>
    //     </div>
    // )

    return (
    <div>
        <Card id="tarjetaProducto" style={{width: '18rem'}}>
            <Card.Img variant="top" id="foto_producto" src={item.img}/>
            <Card.Body className="img-fluid">
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.precio}</Card.Text>
                <Link to={`/item/${item.id}`}>
                <button className="btn btn-dark my-2">Ver detalle</button>
            </Link>
                
            </Card.Body>
        </Card>
        </div>)

}

export default Item