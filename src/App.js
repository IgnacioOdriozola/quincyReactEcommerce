import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer saludo={"Hola"}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer saludo={"Como va"}/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>  
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
