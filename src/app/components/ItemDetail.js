import React from "react";
import "../styles.css";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

  const [compra, setCompra] = useState(false)
  const { addToCart } = useContext(CartContext)


  const onAdd = (cantidad) => {
    setCompra(true)
    console.log(`Compraste ${cantidad} de items`)
    console.log(item, cantidad)

    addToCart(item, cantidad)
  }

  return (
    <div className="item-detail">
      <p>{item.nombre}</p>
      <p>Precio: ${item.precio}</p>
      <p>Unidades disponibles:{item.stock}</p>
      <img src={item.imagen} alt="" />
      {compra ? <Link to='/cart'><button>Ir al carrito</button></Link> : <ItemCount stock={item.stock} onAdd={onAdd} />}
      <Link to='/'><button>Seguir comprando</button></Link>
    </div>
  );
};

export default ItemDetail;