import ItemListContainer from './app/components/ItemListContainer';
import NavBar from './app/components/NavBar'
import './app/styles.css'

const App = () => {
const mensaje = "Bienvenido a DELIGHT"

  return (
    <div>
     <NavBar/>
     <ItemListContainer greetings = {mensaje}></ItemListContainer>
    </div>
  );
}

export default App;

