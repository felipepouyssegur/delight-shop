import NavBar from "./app/components/NavBar";
import ItemCount from "./app/components/ItemCount";
import ItemListContainer from "./app/components/ItemListContainer";
import "./app/styles.css";

const App = () => {
  const miStock = 6;

  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemCount miStock={miStock}></ItemCount>
    </div>
  );
};

export default App;
