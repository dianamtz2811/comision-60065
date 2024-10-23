import { ItemList } from "./ItemList";
import { products } from "../../../products";
import "./itemListCOntainer.css"
import { useEffect, useState } from "react";

// .then sirve para capturar cuando se resuelve la promise
// .catch sirve para capturar cuando se rechaza la promise

let myProductsPromise = new Promise((res,rej) => {
    setTimeout(() =>{
        if (products.length == 0){
            rej("Productos vacíos");
        }else {
        res(products);
        }   
    }, 2500);
});

export const ItemListContainer = ({ greeting, darkMode }) => {

    const [myProducts, setMyProducts] = useState([])

    useEffect (() => {
        myProductsPromise
        .then((data) => {
            setMyProducts(data);
        }).catch((err) => {
            console.log(err);
        });
}, []);

console.log(myProducts);

/* const myProductsConMap = myProducts.map((prod) => prod.title);
console.log(myProductsConMap)  */

    return (
    <div className={ darkMode ? "container-itemlist-dark itemlist" : "container-itemlist itemlist"}>
        <h1>{greeting}</h1>
        <ItemList myProducts={myProducts} />
    </div>
    );
};


