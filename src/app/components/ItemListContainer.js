import React from "react";
import { useState } from "react";
import { getProducts } from "../services/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  useState(() => {
    getProducts().then((data) => {
      setDatos(data);
    });
  }, []);

  return (
    <div>
      <ItemList products={datos} />
    </div>
  );
};

export default ItemListContainer;
