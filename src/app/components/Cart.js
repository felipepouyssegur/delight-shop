import React from 'react'
import '../styles.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';



const Cart = () => {

  const { cart } = useContext(CartContext)

  const { removeItem, getTotalPrice } = useContext(CartContext)

  return (
    <div>
      {cart.length <= 0 ? <h2 className='nohayproductos'>No hay productos en tu carrito. <Link to={'/'}>Seguir comprando</Link></h2> :

        <div className='div-cart'>
          {cart.map((item) => <h2 className='titulos-cart' key={item.nombre}>{item.nombre} <p className='precio-producto'>${item.precio * item.quantity}</p>  <p className='cantidad-producto'> Cantidad: {item.quantity}</p><button className='eliminar-item' onClick={() => removeItem(item.id)}>X</button><img src={item.imagen} alt="Foto imagen" className='imagen-cart' />

          </h2>)}

          <h2 className='precioTotal'>Precio total ${getTotalPrice()}</h2>
          <Link to='finalizar-compra'><button className='finalizar-compra'>Terminar mi compra</button></Link>
        </div>}
    </div>
  )
}

export default Cart