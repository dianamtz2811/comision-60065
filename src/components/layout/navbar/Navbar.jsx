import { CartWidget } from "../../common/cartWidget/CartWidget"
import "./navbar.css"
import Grid from '@mui/material/Grid2';

export const Navbar = () => {
    return (
    <>
    <Grid>
        <div className="container-navbar">
            <img id="image" src="https://res.cloudinary.com/dg3bhw03n/image/upload/v1728361283/carrete_xbf5ra.png" alt="Carrete de Fotografía"/>
            <Grid size={{xs:6}}>
                <h2>absorta</h2>
            </Grid>

            <ul>
                <li>Todo</li>
                <li>Prints</li>
                <li>Diario de fotografía</li>
                <li>Presets Lightroom</li>
                <li>Blog</li>
            </ul>

            <CartWidget />

        </div>
    </Grid>
    </>
    )
};