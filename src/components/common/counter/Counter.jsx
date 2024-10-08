import { useState } from "react";
export const Counter = () => {

    const [contador, setContador] = useState(0);

        const suma = () => {
            setContador(contador + 1)
        };
        const resta = () => {
            setContador(contador - 1)
        };

    return (
        <div>
            <h2>Contador = {contador}</h2>
            <button onClick={suma} >Sumar</button>
            <button onClick={resta} >Restar</button>
        </div>
    );
};
