import { useContext, useEffect, useState } from "react";
import { products } from "../../../products";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "sonner";


export const ItemDetailContainer = () => {

    const { id } = useParams();
    const {addToCart, getTotalQuantity } = useContext(CartContext);

    let totalInCart = getTotalQuantity(id)

    const [item, setItem] = useState({});

    useEffect(() => {
        let productSelected = products.find((producto) => producto.id === id );
        setItem(productSelected);
    }, [id]);

        const agregarAlCarrito = (cantidad) => {
        let objeto = { ...item, quantity: cantidad };
        addToCart(objeto)
        toast.success("Producto agregado al carrito")
    };

    return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito}
    totalInCart={totalInCart} />;
};

