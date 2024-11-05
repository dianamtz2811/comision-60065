import { useState } from "react";

export const Counter = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(0);

        const suma = () => {
            stock > contador ? setContador(contador+1) : alert("Stock máximo")
        };
        const resta = () => {
            setContador(contador - 1)
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
