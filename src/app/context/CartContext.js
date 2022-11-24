import { createContext, useState } from 'react';
import { useContext } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            //existe el item en el carrito
            //mapeo el carrito y busco ese item
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    //encuentro ese item, accedo a la propiedad quantity y le sumo
                    //la cantidad que viene por parametro
                    return { ...prod, quantity: prod.quantity + cantidad }
                } else {
                    //a los productos que sobran, los devuelvo tal cual estan
                    return prod
                }
            })
            //actualizo el carrito con el array nuevo
            setCart(carritoActualizado)
        } else {
            //no existe en el carrito, lo agrego como viene.
            const purchase = { ...item, quantity: cantidad }
            setCart([...cart, purchase]);
        }
    }
    const clear = () => {
        setCart([])
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter(prod => prod.id !== id)
        setCart([...deleteItem]);
    }


    const getTotalPrice = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    return (
        <CartContext.Provider value={{ cart, clear, isInCart, removeItem, addToCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
