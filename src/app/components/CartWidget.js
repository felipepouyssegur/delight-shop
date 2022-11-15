import React from 'react'
import Imagen from '../assets/img/cart.png'
import "../styles.css"

function CartWidget() {
  return (
    <div className='logo-carrito'>
    <img src={Imagen} />
    <p className='cart-number'></p>
    </div>
  )
}

export default CartWidget