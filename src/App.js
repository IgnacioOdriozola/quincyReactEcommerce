import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';
import CartWidget from './components/cartWidget/CartWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <body>
        <CartWidget></CartWidget>
        <ItemListContainer saludo={"Hola"}></ItemListContainer>
      </body>
    </div>
  );
}

export default App;
