import React from "react";
import { useState } from "react";
import { getProducts } from "../services/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/products";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const {categoryId} = useParams()
  useState(() => {
    getProducts().then((data) => {
      setDatos(data);
    });
  }, []);


 useState(() => {
    if(categoryId){
      getProductsByCategory(categoryId)
      .then((data) => setDatos(data))
    }else{
      getProducts()
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
