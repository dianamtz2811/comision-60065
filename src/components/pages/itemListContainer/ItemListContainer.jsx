import { ItemList } from "./ItemList";
import "./itemListCOntainer.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../products";


export const ItemListContainer = () => {

    const { category } = useParams();
    const [myProducts, setMyProducts] = useState([])

    useEffect (() => {
        const productsCollection = collection(db, "products");

        let docsRef = productsCollection;
        if (category) {
            docsRef = query(productsCollection, where("category", "==", category));
        }
        getDocs(docsRef).then((res) => {
            let arrayEntendible = res.docs.map((doc) => {
                return{ ...doc.data(), id: doc.id };
            });
        setMyProducts(arrayEntendible);
        });
}, [category]);

    /* if (myProducts.length === 0) {
        return <h1>Cargando...</h1>
    }*/

    /*const funcionParaAgregar = () => {
    const productsCollection = collection(db, "products");
        
        products.forEach((product) => {
            addDoc(productsCollection, product);
        });
    }*/

    return (
    <div className="container-itemlist">
        <h2>Congelando la ciudad en fotos</h2>
        { myProducts.length === 0 ?
        <Box sx={{ width: "100%"}}>
        <LinearProgress />
        </Box> : <ItemList myProducts={myProducts} /> }
        <h4>Sígenos en Behance</h4>

        {/*<button onClick={funcionParaAgregar}>Cargar Productos</button>*/}
    </div>
    );
};


