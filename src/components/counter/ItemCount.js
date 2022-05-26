import './counter.scss'
import { useEffect, useState } from "react"
import { Button, Card } from 'react-bootstrap'

export const ItemCount = () => {
     
    
    let [contador, setContador] = useState(1)
    
    const producto =  {
        nombre: "computadora",
        stock: 5

    }
    


    const incrementar = () => {
        if (contador === producto.stock)
        return;
        setContador( contador + 1 ) 
    }

    const restar = () => {
        if(contador <= 1){
            return;  
          }
        setContador( contador - 1)
    }

    const agregarAlCarrito = () => {
        console.log(contador)
    }

    useEffect (() => {

    },[])

    // const contadorMenosUno = () => {
    //     setContador1 (contador1 < 0)
        
    // }

    // const incrementar2 = () => {
    //     setContador2( contador2 + 1 )

    // }


    return ( 
    <><div className="container my-5">

        </div><Card id="centrado" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://fakeimg.pl/640x360" className="img-fluid"/>
                <Card.Body className='bg-secondary'>
                    <Card.Title>Producto</Card.Title>
                    <Card.Text>
                        cuantas unidades?
                    </Card.Text>
                    <div id="centrado">
                <button className="btn btn-warning" onClick={restar}>-</button>
                <Card.Body className='bg-info' id="numeroContador">{contador}</Card.Body>
                <button className="btn btn-primary" onClick={incrementar}>+</button>
            </div>
                    <Button variant="primary" className="" id="botonComprar" onClick={agregarAlCarrito}>Agregar al Carrito</Button>
                </Card.Body>
            </Card></>
     )
}
 
export default ItemCount

