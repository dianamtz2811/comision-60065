import { Counter } from "../../common/counter/Counter";

export const ItemDetail = ({ item, agregarAlCarrito }) => {
    return (
    <div>
        <h1>Acá va el detalle de los productos:</h1>
        <h2> Título: { item.title } </h2>
        <h3> Precio: { item.price } </h3>
        <p>Descripción: { item.description } </p>
        <img src= { item.imageURL } width="500"/>
        <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito}/>
    </div>
    );
};

