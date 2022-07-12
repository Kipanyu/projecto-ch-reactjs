import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import Loader from "../Loader/Loader";





export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
       
        console.log(itemId)
        console.log(item)

        useEffect(() => {
            setLoading(true)
            const docRef = doc(db, "productos", itemId)
    
            

            getDoc(docRef)
            .then((doc) => {
                setItem( {id: doc.id, ...doc.data()} )
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])


        return (
            <section className="container my-5">
                
                {
                    loading
                    ?   <Loader/>
    
                    :  <ItemDetail item={item}/>
                }
                
            </section>
        )
    }

    export default ItemDetailContainer