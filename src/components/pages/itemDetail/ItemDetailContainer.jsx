import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ItemDetail } from "./itemDetail";


export const ItemDetailContainer = () => {
    let id = "3"
    const [item, setItem] = useState({});

    useEffect(() => {
        let productSelected = products.find((producto) => producto.id === id );
        setItem(productSelected);
    }, [id]);
    
    return <ItemDetail item={item}/>;
};

