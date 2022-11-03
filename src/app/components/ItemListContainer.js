import React from "react";
import { useState } from "react";
import { getProducts } from "../services/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetings }) => {
  const [datos, setDatos] = useState([]);
  useState(() => {
    getProducts().then((data) => {
      setDatos(data);
    });
  }, []);

  return (
    <div>
      <h2 className="bienvenida">{greetings}</h2>
      <ItemList products={datos} />
    </div>
  );
};

export default ItemListContainer;
