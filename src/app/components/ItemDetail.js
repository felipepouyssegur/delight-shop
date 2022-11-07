import React from "react";
import "../styles.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  console.log("asd", item);
  return (
    <div className="item-detail">
      <p>{item.nombre}</p>
      <p>Precio: ${item.precio}</p>
      <p>Unidades disponibles:{item.stock}</p>
      <img src={item.imagen} alt="" />
      <ItemCount stock = {item.stock}/>
    </div>
  );
};

export default ItemDetail;
