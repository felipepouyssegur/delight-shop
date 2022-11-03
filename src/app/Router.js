import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/delight-shop" element={<ItemListContainer />}></Route>
        <Route path="/:id" element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
