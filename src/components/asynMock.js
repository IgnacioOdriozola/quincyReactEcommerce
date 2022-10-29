const products = [
    {id:'1', title:'producto-1',price: 1000,category: '1',pictureUrl:'https://picsum.photos/200?1',stock:4,description:'product description 1'},
    {id:'2', title:'producto-2',price: 2000,category: '2',pictureUrl:'https://picsum.photos/200?2',stock:7,description:'product description 2'},
    {id:'3', title:'producto-3',price: 3000,category: '3',pictureUrl:'https://picsum.photos/200?3',stock:5,description:'product description 3'},
    {id:'4', title:'producto-4',price: 4000,category: '4',pictureUrl:'https://picsum.photos/200?4',stock:2,description:'product description 4'},
    {id:'5', title:'producto-5',price: 4000,category: '1',pictureUrl:'https://picsum.photos/200?5',stock:8,description:'product description 5'},
    {id:'6', title:'producto-6',price: 5000,category: '1',pictureUrl:'https://picsum.photos/200?6',stock:4,description:'product description 6'},
    {id:'7', title:'producto-7',price: 6000,category: '2',pictureUrl:'https://picsum.photos/200?7',stock:7,description:'product description 7'},
    {id:'8', title:'producto-8',price: 7000,category: '3',pictureUrl:'https://picsum.photos/200?8',stock:5,description:'product description 8'},
    {id:'9', title:'producto-9',price: 1000,category: '4',pictureUrl:'https://picsum.photos/200?9',stock:2,description:'product description 9'},
    {id:'10', title:'producto-10',price: 1600,category: '1',pictureUrl:'https://picsum.photos/200?10',stock:8,description:'product description 10'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prods => prods.category===categoryId))
        },2000);
    })
}

export const getProduct =(id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find( prod => prod.id === id))
        }, 1500);
    })
}