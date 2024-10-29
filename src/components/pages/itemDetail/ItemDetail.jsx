export const ItemDetail = ({ item }) => {
    return (
    <div>
        <h1>Acá va el detalle de los productos:</h1>
        <h2> Título: { item.title } </h2>
        <h3> Precio: { item.price } </h3>
        <p>Descripción: { item.description } </p>
    </div>
    );
};

