import "./card.css"
import Grid from '@mui/material/Grid2';

export const Card = ({ title, price, stock, image }) => {

    return (
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <div className="container-card">
            <Grid size={6}>
                <h2>Título: {title}</h2>
            </Grid>
            <Grid size={6}>
                <h3>Precio: {price}</h3>
            </Grid>
            <Grid size={6}>
                <h3>Stock: {stock}</h3>
            </Grid>
            <Grid size={6}>
                <img
                src={image}
                style={{
                    width:"100px"
                }}
                />
            </Grid>
        </div>
        </Grid>
    );
};