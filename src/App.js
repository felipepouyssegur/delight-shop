import ItemCount from './app/components/ItemCount';
import ItemListContainer from './app/components/ItemListContainer';
import NavBar from './app/components/NavBar'
import './app/styles.css'

const App = () => {
const mensaje = "Bienvenido a DELIGHT"
const miStock = 6

  return (
    <div>
     <NavBar/>
     <ItemListContainer greetings = {mensaje}></ItemListContainer>
     <ItemCount miStock = {miStock}></ItemCount>
    </div>
  );
}

export default App;

