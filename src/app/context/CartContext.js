import {createContext,useState} from 'react';
import { useContext } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);


    return (            
            <CartContext.Provider value={[cart, setCart]}>
                {children}
            </CartContext.Provider>  
    );
}

export default CartProvider;