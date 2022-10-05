import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../asynMock"
import ItemList from "../itemList/ItemList"

const ItemListContainer = ({saludo}) =>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{
        if(!categoryId){
            getProducts().then(response => {
                setProducts(response)
            }).finally(()=>{
                setLoading(false);
            })
        }else{
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).finally(()=>{
                setLoading(false);
            })
        }
    },[categoryId])

    if(loading){
        return <h1>Cargando...</h1>
    }


    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList itemsList ={products}/>
        </div>
    )
}

export default ItemListContainer