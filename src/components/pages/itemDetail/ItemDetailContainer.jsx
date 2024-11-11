import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "sonner";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";


export const ItemDetailContainer = () => {

    const { id } = useParams();
    const {addToCart, getTotalQuantity } = useContext(CartContext);

    let totalInCart = getTotalQuantity(id)

    const [item, setItem] = useState({});

    useEffect(() => {
        const productsCollection = collection(db, "products");
        const docsRef = doc(productsCollection, id);
        getDoc(docsRef).then((res) => {
            setItem({...res.data(), id: res.id });
        });
    }, [id]);

        const agregarAlCarrito = (cantidad) => {
        let objeto = { ...item, quantity: cantidad };
        addToCart(objeto)
        toast.success("Producto agregado al carrito")
    };

    return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito}
    totalInCart={totalInCart} />;
};

