import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Formulario from "./components/Formulario"
import Footer from "./components/Footer";


const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/delight-shop" element={<ItemListContainer />}></Route>
        <Route path="/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path="/cart/finalizar-compra" element={<Formulario />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

export default Router;
