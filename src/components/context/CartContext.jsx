import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ( {children}) =>{
    const [cart, setCart] = useState([{},{}]);

    const addToCart = (product) => {
        setCart([...cart, product])
    };

    const removeById = ( id ) => {
        let arrayFiltrado = cart.filter((elemento) => elemento.id !== id )
        setCart(arrayFiltrado)
    };

    const resetCart = () => {
        setCart([]);
    };

    let data = {cart, addToCart, removeById, resetCart}
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
};


