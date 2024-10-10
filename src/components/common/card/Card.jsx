import "./card.css"
import Grid from '@mui/material/Grid2';

export const Card = ({ title, price, stock }) => {


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
        </div>
        </Grid>
    );
};