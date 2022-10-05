const ItemDetail = (product) => {

    return (
        <div>
            <img src={product.product.pictureUrl} alt="product img"/>
            <h1>{product.product.title}</h1>
            <p>{product.product.description}</p>
        </div>
    )

}

export default ItemDetail;