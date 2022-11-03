import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

const Layout = () => {
  return (
    <div>
      <h1>Contenido Fijo</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
