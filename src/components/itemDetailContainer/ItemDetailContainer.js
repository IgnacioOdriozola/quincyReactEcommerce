import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../asynMock";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState();
    const [loading,setLoading] = useState(true);
    const {productId} = useParams();

    useEffect(()=>{
        getProduct(productId).then(response =>{
            setLoading(false)
            setProduct(response)
        })
    },[productId])

    if(loading){
        return <h1>Cargando</h1>
    }

    return(
        <div className="itemCard">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;