import { Link } from "react-router-dom";

export const CartContainer = () => {
    return (
    <div>
    <h1>Acá va el carrito</h1>
    <Link to="/checkout">Finalizar compra</Link>
    </div>
    );
};
