import ItemCount from '../counter/ItemCount'
import './ItemListContainer.scss'


export const ItemListContainer = ( {nombre} ) => {

    return (
        <section className="ItemListContainer">
            <h2 className="ItemListContainer__greetings">Catálogo</h2>
            <hr/>

            <p>Bienvenido! {nombre}</p>
            
        </section>
    )
}