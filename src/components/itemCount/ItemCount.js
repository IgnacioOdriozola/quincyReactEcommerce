import { useState } from "react";

const ItemCount = ({stock, initial, onAdd})=>{
    const [counter, setCounter] = useState(initial);


    return (
        <div >
            <h1>{counter}</h1>
            <div className="counter">
                <button className="btn" onClick={()=>counter > 0 && setCounter(counter-1)}>-</button>
                <button className="btn" onClick={()=>counter < stock && setCounter(counter+1)}>+</button>
            </div>
                <button onClick={onAdd(counter)} className="btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;