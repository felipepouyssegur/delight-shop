import React from "react";
import { useState } from "react";
import { getItems, getItemsByCondition } from "../services/api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      getItemsByCondition(categoryId)
        .then((data) => setDatos(data))
    } else {
      getItems()
        .then((data) => setDatos(data))
    }

  }, [categoryId]);

  return (
    <div>
      <ItemList products={datos} />
    </div>
  );
};

export default ItemListContainer;