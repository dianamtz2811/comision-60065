import { ItemList } from "./ItemList";
import { products } from "../../../products";
import "./itemListCOntainer.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export const ItemListContainer = () => {

    const { category } = useParams();
    const [myProducts, setMyProducts] = useState([])

    useEffect (() => {
        const unaFraccion = products.filter((producto) => producto.category === category);
        const getProducts = new Promise((resolve) => {
            resolve(category ? unaFraccion : products);
        });
        getProducts.then((res) => {
            setTimeout(() => {
                setMyProducts(res);
            }, 2000);
        });
}, [category]);

    /* if (myProducts.length === 0) {
        return <h1>Cargando...</h1>
    }*/

    return (
    <div className="container-itemlist">
        <h2>Congelando la ciudad en fotos</h2>
        { myProducts.length === 0 ?
        <Box sx={{ width: "100%"}}>
        <LinearProgress />
        </Box> : <ItemList myProducts={myProducts} /> }
        <h4>Sígenos en Behance</h4>
    </div>
    );
};


