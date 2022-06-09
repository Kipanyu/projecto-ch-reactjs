import React from 'react'
import './counter.scss'
import { useEffect, useState } from "react"
import { Button, Card, Container } from 'react-bootstrap'
import { productos } from "../mock/data"


export const INIT_VALUE_CART  = 0;

export const ItemCount = () => {

     let stock = productos.stock
     
    
    let [contador, setContador] = useState(1)

    

    
    // const productos =  {
    //     nombre: "computadora",
    //     stock: 5,

    // }

    
    
    // const contadorMenosUno = () => {
    //     setContador1 (contador1 < 0)
        
    // }

    // const incrementar2 = () => {
    //     setContador2( contador2 + 1 )

    // }

    const incrementar = () => {
         if (contador === 6)
         return;
        setContador( contador + 1 ) 
    }

    const restar = () => {
        if(contador <= 0){
            return;  
          }
        setContador( contador - 1)
    }

    const agregarAlCarrito = () => {
        console.log(contador)
    }

    const restartCart = () => {
        setContador (contador === 0)
    }
    //montaje y actualizacion
    // useEffect (() => {

    //     console.log("componente montado")
    
    //     },[])


    //solo cuando se monta
    useEffect (() => {

    console.log("componente montado")

    },[])

    useEffect (() => {

        console.log("contador actualizado")
    
        },[contador])



    return ( 
 <>
     <Container id="contador"><Button className="btn btn-dark" onClick={restar}>-</Button><div></div>
         <Card.Body className='border' id="numeroContador">{contador}</Card.Body>
         
         <Button className="btn btn-dark " onClick={incrementar}>+</Button>
     </Container>
     <Button variant="primary" className="btn btn-dark" id="botonComprar" onClick={agregarAlCarrito}>Agregar al Carrito</Button>
     <Button variant="dark" className="btn btn-dark" onClick={restartCart}>Vaciar Carrito</Button>
                    </>
     )
}
 
export default ItemCount

 // <><div className="container my-5">

    //     </div><Card id="centrado" style={{ width: '18rem' }}>
    //             <Card.Img variant="top" src="https://fakeimg.pl/640x360" className="img-fluid"/>
    //             <Card.Body className='bg-secondary'>
    //                 <Card.Title>Producto</Card.Title>
    //                 <Card.Text>
    //                     cuantas unidadses?
    //                 </Card.Text>
    //                 <div id="centrado">
    //             <button className="btn btn-warning" onClick={restar}>-</button>
    //             <Card.Body className='bg-info' id="numeroContador">{contador}</Card.Body>
    //             <button className="btn btn-primary" onClick={incrementar}>+</button>
    //         </div>
    //                 <Button variant="primary" className="" id="botonComprar" onClick={agregarAlCarrito}>Agregar al Carrito</Button>
    //                 <Button variant="warning" onClick={restartCart}>Vaciar Carrito</Button>
    //             </Card.Body>
    //         </Card></>