
import { Card, Button, Row, Container } from "react-bootstrap"
import ItemCount from "../counter/ItemCount"
import { ViewDetail } from "./VerDetalle"



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
            <Card.Img variant="top" src="{item.img}"/>
            <Card.Body className="img-fluid">
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text>Stock: {item.stock}</Card.Text>
                <Card.Text>{item.precio}</Card.Text>
                <ViewDetail/>
                
            </Card.Body>
        </Card>
        </div>)

}

export default Item