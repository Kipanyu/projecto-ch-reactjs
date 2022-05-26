import './counter.scss'
import { useState } from "react"
import { Badge, Card } from 'react-bootstrap'

export const Counter = () => {
     
    
    let [contador1, setContador1] = useState(1)
    // let [contador2, setContador2] = useState(1)
    


    const incrementar1 = () => {
        setContador1( contador1 + 1 ) 
    }

    const restar = () => {
        setContador1( contador1 - 1)
    }

    // const incrementar2 = () => {
    //     setContador2( contador2 + 1 )

    // }


    return ( 
    <div className="container my-5">
        <h2>Counter</h2>
        <hr/>
        <div id="centrado">
        <button className="btn btn-warning" onClick={restar}>-</button>
        <Card.Body className='bg-secondary' id="numeroContador">{contador1}</Card.Body>
        <button className="btn btn-primary" onClick={incrementar1}>+</button>
        </div>



    </div>
     )
}
 
export default Counter

