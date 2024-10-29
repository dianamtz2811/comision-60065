import "./card.css"
import { Link } from "react-router-dom"

export const Card = ({ title, price, stock, image, id }) => {

    return (
    <div className="container-card">
        <h2>Título: {title}</h2>
        <h3>Precio: {price}</h3>
        <h3>Stock: {stock}</h3>
        <img
            src={image}
            style={{
                width:"100px",
                }}
        />
        <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
        </Link>
    </div>
    );
};