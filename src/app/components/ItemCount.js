import React, { useState } from 'react'

const ItemCount = ({miStock}) => {

const [contador, setContador] = useState(1)

const agregarContador = () => {
    setContador(contador + 1)
}
const restarContador = () => {
    setContador(contador - 1)
}

  return (
    <div className='button-div'>
        <p>HOODIE FIRE</p>
        <p>Stock disponible: {miStock}</p>
        <button onClick={restarContador} disabled={contador <= 0}>-</button>
        <p>{contador}</p>
        <button  onClick={agregarContador} disabled={contador >= miStock}>+</button>
    </div>
  )
}

export default ItemCount