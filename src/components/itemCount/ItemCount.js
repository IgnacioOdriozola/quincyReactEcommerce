import { useState } from "react";

const ItemCount = ({stock, initial, onAdd})=>{
    const [counter, setCounter] = useState(initial);


    return (
        <div className="counter">
            <h1>{counter}</h1>
            <div>
                <button className="btn" onClick={()=>counter > 0 && setCounter(counter-1)}>-</button>
                <button className="btn" onClick={()=>counter < stock && setCounter(counter+1)}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;