import cartIcon from "../../media/img/CartIcon.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () =>{
    const appContextValue = useContext(CartContext)
    const contextLength =appContextValue.length
    return (
        <Link to='/cart' className="cartIconContainer">
            <picture >
                <img className="cartIcon" src={cartIcon} alt="cart"></img>
            </picture>
            <span className="cartItemsCounter">{contextLength}</span>
        </Link>
    )
}

export default CartWidget