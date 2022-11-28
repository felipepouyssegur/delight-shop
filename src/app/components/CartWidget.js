import React from 'react'
import Imagen from '../assets/img/cart.png'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "../styles.css"
import { Link } from 'react-router-dom';

function CartWidget() {

  const { cart } = useContext(CartContext)

  return (
    <div className='logo-carrito'>
      <Link to='/cart'><img src={Imagen} alt='foto logo carrito' className='foto-cart' /> </Link>
      <p className='cart-number'>{cart.reduce((accum, item) => accum + item.quantity, 0)}</p>
    </div>
  )
}

export default CartWidget