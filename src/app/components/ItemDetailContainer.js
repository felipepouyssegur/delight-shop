import React, { useState } from "react";
import { getProduct } from "../services/products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getProduct(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
