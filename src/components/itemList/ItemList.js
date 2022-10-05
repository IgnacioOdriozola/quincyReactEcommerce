import Item from "../item/Item";

const ItemList = ({itemsList}) => {
    return (
        <div className="itemList">
            {itemsList.map(prod => <Item key={prod.id} product={prod} />)}
        </div>
    )
}

export default ItemList;