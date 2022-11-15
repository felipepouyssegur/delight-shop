import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {

const [contador, setContador] = useState(1)

const agregarContador = () => {
    setContador(contador + 1)
}
const restarContador = () => {
    setContador(contador - 1)
}

  return (
    <div className='button-div'>
        <p>Stock disponible: {stock}</p>
        <button onClick={restarContador} disabled={contador <= 0}>-</button>
        <p>{contador}</p>
        <button  onClick={agregarContador} disabled={contador >= stock}>+</button>
        <button onClick={() => onAdd(contador)} disabled={contador === 0}>COMPRAR</button>
    </div>
  )
}

export default ItemCount