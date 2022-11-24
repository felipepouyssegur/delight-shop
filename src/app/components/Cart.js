import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles.css'



const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log('aaa', cart)

  const { removeItem } = useContext(CartContext)

  return (

    <div className='div-cart'>
      {cart.map((item) => <h2 className='titulos-cart'>{item.nombre} <p className='precio-producto'>${item.precio}</p>  <p className='cantidad-producto'> Cantidad: {item.quantity}</p><img src={item.imagen} alt="Foto imagen" className='imagen-cart' />

        <button className='eliminar-item' onClick={removeItem(item.id)}>Eliminar item</button></h2>)}


      <h2>Precio total</h2>
    </div>
  )
}

export default Cart