import { BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "../pages/Init";
import Page2 from "../pages/Page2";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Init />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
