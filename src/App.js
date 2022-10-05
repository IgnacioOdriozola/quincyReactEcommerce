import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer saludo={"Hola"}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer saludo={"Como va"}/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
