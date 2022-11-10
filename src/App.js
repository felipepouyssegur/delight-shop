import Router from "./app/Router";
import "./app/styles.css";
import Provider from "./app/context/CartContext";


const App = () => {
  return (
    <div>
        <Provider>
         <Router />
        </Provider>
    </div>
  );
};

export default App;
