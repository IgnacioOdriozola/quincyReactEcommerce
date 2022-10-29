import { Link } from "react-router-dom";
import BasicProductInfo from "../basicProductInfo/BasicProductInfo";

const Item = ({product}) =>{
    return (
        <Link to={'/detail/'+ product.id} className="itemCard">
            <BasicProductInfo product={product}/>
        </Link>
    )
}

export default Item;