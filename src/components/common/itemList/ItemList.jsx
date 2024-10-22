import { Card } from "../card/Card";

export const ItemList = ( { myProducts } ) => {
    return myProducts.map(( {id, title, price, stock, imageURL} ) => (
        <Card 
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageURL}
        />
    ));
}
