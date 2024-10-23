import { Card } from "../../common/card/Card";

export const ItemList = ( { myProducts } ) => {
    return (
        <>
        <h2>Listado de Productos</h2>
        <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width:"100%"
        }}
        >

        {myProducts.map(( {id, title, price, stock, imageURL} ) => (
        <Card 
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageURL}
        />
    ))}
</div>
</>
)}
