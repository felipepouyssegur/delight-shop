import NavBar from "./app/components/NavBar";
import ItemCount from "./app/components/ItemCount";
import ItemListContainer from "./app/components/ItemListContainer";
import "./app/styles.css";

const App = () => {
  const mensaje = "Bienvenido a DELIGHT";
  const miStock = 6;

  return (
    <div>
      <NavBar></NavBar>
      <ItemCount miStock={miStock}></ItemCount>
      <ItemListContainer greetings={mensaje}></ItemListContainer>
    </div>
  );
};

export default App;
