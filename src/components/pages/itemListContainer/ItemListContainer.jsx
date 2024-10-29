import { ItemList } from "./ItemList";
import { products } from "../../../products";
import "./itemListCOntainer.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting, darkMode }) => {

    const { category } = useParams();

    const [myProducts, setMyProducts] = useState([])

    useEffect (() => {

        const unaFraccion = products.filter((producto) => producto.category === category);

        const getProducts = new Promise((resolve) => {
            resolve(category ? unaFraccion : products);
        });
        getProducts.then((res) => {
            setMyProducts(res);
        });
}, [category]);

/* const myProductsConMap = myProducts.map((prod) => prod.title);
console.log(myProductsConMap)  */

    return (
    <div className={ darkMode ? "container-itemlist-dark itemlist" : "container-itemlist itemlist"}>
        <h1>{greeting}</h1>
        <ItemList myProducts={myProducts} />
    </div>
    );
};


