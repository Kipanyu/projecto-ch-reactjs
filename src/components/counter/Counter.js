import { useState } from "react"

export const Counter = () => {
     
    
    let [contador1, setContador1] = useState(1)
    // let [contador2, setContador2] = useState(1)

    


    const incrementar1 = () => {
        setContador1( contador1 + 1 ) 
    }

    // const incrementar2 = () => {
    //     setContador2( contador2 + 1 )

    // }


    return ( 
    <div className="container my-5">
        <h2>Counter</h2>
        <hr/>
        <button className="btn btn-primary" onClick={incrementar1}>click aqui</button>
        <hr/>
        <p>{contador1}</p>


    </div>
     )
}
 
export default Counter

