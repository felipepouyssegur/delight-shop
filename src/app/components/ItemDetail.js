import React from "react";
import "../styles.css";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {

 const [compra, setCompra]= useState(false)

 const onAdd = (cantidad) => {
  setCompra(true)
  console.log(`Compraste ${cantidad} de items`)
 }
  return (
    <div className="item-detail">
      <p>{item.nombre}</p>
      <p>Precio: ${item.precio}</p>
      <p>Unidades disponibles:{item.stock}</p>
      <img src={item.imagen} alt="" />
    {compra ? <Link to='/cart'><button>Ir al carrito</button></Link> :  <ItemCount stock = {item.stock} onAdd={onAdd}/>}
    </div>
  );
};

export default ItemDetail;