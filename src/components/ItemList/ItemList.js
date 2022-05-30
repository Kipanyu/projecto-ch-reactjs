import Item from "../items/Item"
import './ItemList.scss'



const ItemList = ( {items} ) => {

    return (
        <div id="seccion">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    )
}

export default ItemList