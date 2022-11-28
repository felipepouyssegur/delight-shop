import React from 'react'
import '../styles.css'
import CartItems from './CartItems'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartMensaje from './CartMensaje';



const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <div>
      {cart.length <= 0 ? <CartMensaje /> : <CartItems />}
    </div>
  )
}

export default Cart