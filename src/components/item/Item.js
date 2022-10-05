import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import ItemDetail from "../itemDetail/ItemDetail";

const Item = ({product}) =>{
    return (
        <Link to={'/detail/'+ product.id} className="itemCard">
            <ItemDetail product={product}/>
            <ItemCount initial={0} stock={product.stock}/>
            <button className="btn">Agregar al carrito</button>
        </Link>
    )
}

export default Item;