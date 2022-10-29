const BasicProductInfo = (product) => {
    return (
        <>
            <img src={product.product.pictureUrl} alt="product img"/>
            <h1>{product.product.title}</h1>
            <h2>${product.product.price}</h2>
        </>
    )
}

export default BasicProductInfo;