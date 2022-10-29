import BasicProductInfo from "../basicProductInfo/BasicProductInfo";
import ItemCount from "../itemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = (product) => {

    const [items, setItems] = useState(0)
    const [initial,setInitial] = useState(0);
    let {cart, addItem} = useContext(CartContext);
    
    const existingInCart = cart.find(prod => prod.id === product.id)
    if(existingInCart){
        cart = cart.filter(prod => prod.id !== product.id)
        setInitial(existingInCart.itemQuantity)
    }
    
    
    const addItemsQtty = (quantity)=>{
        setItems(quantity)
        const totalItems = {
            ...product.product,
            itemQuantity: items
        }
        addItem(totalItems);
    }

    return (
        <div> 
            <BasicProductInfo product={product.product}/>
            <p>{product.product.description}</p>
            {
                items===0?
                <ItemCount onAdd={addItemsQtty} initial={initial} stock={product.product.stock} id={product.product.id}/>
                :
                <Link to='/cart' className="btn">Ir al carrito</Link>
            }
        </div>
    )

}

export default ItemDetail;