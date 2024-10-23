import "./card.css"

export const Card = ({ title, price, stock, image }) => {

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
        <button>Ver detalle</button>
    </div>
    );
};