export const ItemDetail = ({ item }) => {
    return (
    <div>
        <h1>Acá va el detalle de los productos:</h1>
        <h2> Título: { item.title } </h2>
        <h2> Precio: { item.price } </h2>
        <h2> Marca: { item.brand } </h2>
    </div>
    );
};

