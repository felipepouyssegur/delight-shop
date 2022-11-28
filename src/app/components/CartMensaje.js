import React from 'react'
import { Link } from 'react-router-dom'

const CartMensaje = () => {
    return (
        <div className='mensaje-back'>
            <h2 className='mensaje'>No hay items en tu carrito. <Link to={'/'}>Seguir comprando</Link></h2>
        </div>
    )
}

export default CartMensaje