import React from 'react'
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"

import './ItemListContainer.scss'



export const ItemListContainer = () => {

    

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section id="section">
            
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                : <div> <ItemList items={items}/></div>
            }
            
        </section>
    )
}





// export const ItemListContainer = ( {nombre} ) => {

//     return (
//         <section className="ItemListContainer">
//             <h2 className="ItemListContainer__greetings">Catálogo</h2>
//             <hr/>

//             <p>Bienvenido! {nombre}</p>
            
//         </section>
//     )
// }