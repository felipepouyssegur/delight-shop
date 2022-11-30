import React, { useState } from "react";
import { getItemById } from "../services/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getItemById(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} key={item.id} />
    </div>
  );
};

export default ItemDetailContainer;
