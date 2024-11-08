import { useState } from "react";

export const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
    const [contador, setContador] = useState(1);

        const suma = () => {
            if ( stock - totalInCart > contador) {
                setContador(contador+1);
            } else {
                alert("No hay stock suficiente");
            }
        };
        const resta = () => {
            contador > 1 && setContador(contador - 1)
        };

    return (
        <div>
            <h2>Contador = {contador}</h2>
            <button onClick={suma} >Sumar</button>
            <button onClick={resta} >Restar</button>
            <button onClick={()=>agregarAlCarrito(contador)}>Agregar al carrito</button>
        </div>
    );
};
