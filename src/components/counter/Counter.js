import { useState } from "react"

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
        <div>
        <button className="btn btn-success" onClick={incrementar1}>+</button>
        <p>{contador1}</p>
        </div>
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
        </div>


    </div>
     )
}
 
export default Counter

