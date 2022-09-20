import cartIcon from "../../media/img/CartIcon.png"

const CartWidget = () =>{
    return (
        <div className="cartIconContainer">
            <picture >
                <img className="cartIcon" src={cartIcon} alt="cart"></img>
            </picture>
            <span className="cartItemsCounter">5</span>    
        </div>
    )
}

export default CartWidget