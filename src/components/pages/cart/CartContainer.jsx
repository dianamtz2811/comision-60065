import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {

    const { cart, resetCart, removeById } = useContext(CartContext);

        return (
        <div>
            <h1>Acá va el carrito</h1>
                {cart.map((product) => {
                    return (
                        <div key={product.id} style={{
                            border: "2px solid black", 
                            width:"300px", 
                            marginBottom:"10px",
                            padding:"10px" }}>
                            <h2>{product.title}</h2>
                            <h3>Cantidad: {product.quantity}</h3>
                            <button onClick={()=> removeById( product.id )}>Eliminar</button>
                        </div>
                    );
        })}

                <button onClick={resetCart}>Limpiar carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
        );
};
