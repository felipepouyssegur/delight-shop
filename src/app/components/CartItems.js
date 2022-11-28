import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles.css'



const CartItems = () => {
    const { cart } = useContext(CartContext)
    console.log('hola', cart.lenght)

    const { removeItem, getTotalPrice } = useContext(CartContext)


    return (

        <div className='div-cart'>
            {cart.map((item) => <h2 className='titulos-cart'>{item.nombre} <p className='precio-producto'>${item.precio * item.quantity}</p>  <p className='cantidad-producto'> Cantidad: {item.quantity}</p><img src={item.imagen} alt="Foto imagen" className='imagen-cart' />

                <button className='eliminar-item' onClick={() => removeItem(item.id)}>Eliminar item</button></h2>)}

            <h2 className='precioTotal'>Precio total ${getTotalPrice()}</h2>
            <button>Terminar mi compra</button>
        </div>
    )
}

export default CartItems