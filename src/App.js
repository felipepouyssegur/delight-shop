import ItemListContainer from './app/components/ItemListContainer';
import NavBar from './app/components/NavBar'
import './app/styles.css'

const App = () => {
let fecha = new Date()
const mensaje = "Bienvenido a DELIGHT"
  return (
    <div>
     <NavBar/>
     <ItemListContainer greetings = {mensaje}></ItemListContainer>
     <p>{fecha}</p>
    </div>
  );
}

export default App;

