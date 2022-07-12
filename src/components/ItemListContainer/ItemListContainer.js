import React from 'react'
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import { collection, query, getDocs, where} from 'firebase/firestore'
import { db } from "../firebase/config"
import './ItemListContainer.scss'



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    // const params = useParams()
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        // 1.- armar la referencia
        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef
        // 2.- (async) llamar a Firebase con la referencia anterior
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                console.log(newItems)
                setItems( newItems )
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])

    return (
        <section className="container my-5">
            {
                loading
                ?  <Loader/>
                :  <ItemList items={items}/>
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