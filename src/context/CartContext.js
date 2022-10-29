import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item) =>{
        const foundedItem = isInCart(item.id);
        console.log(foundedItem)
        if(foundedItem!==undefined){
            const auxCart = cart.filter(prod => prod.id !== item.id)
            auxCart.push(item);
            setCart(auxCart);
        }else{
            setCart([...cart,item])
        }
    }

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) =>{
        const auxCart = cart.filter(prod => prod.id !== id);
        setCart(auxCart)
    }

    return(
        <CartContext.Provider value={{cart,addItem,isInCart,removeItem}}>
            {children}
        </CartContext.Provider>
    )
}