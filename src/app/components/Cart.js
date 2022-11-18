import React from 'react'
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import '../styles.css'
import ItemCount from './ItemCount';

const Cart = () => {
  const {cart} = useContext(CartContext)
  console.log('aaa', cart)

  return (
    <div>
    {cart.map((item) => <h1 className='titulos-cart'>{item.nombre} {item.quantity}</h1>)}
    </div>
  )
}

export default Cart