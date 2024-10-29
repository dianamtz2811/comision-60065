import { CartWidget } from "../../common/cartWidget/CartWidget"
import "./navbar.css"
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";

export const Navbar = ({darkMode}) => {
    return (
    <>
    <Grid>
        <div className={ darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"}>
            <Link to="/">
                <img id="image" src="https://res.cloudinary.com/dg3bhw03n/image/upload/v1728361283/carrete_xbf5ra.png" alt="Carrete de Fotografía"/>
            </Link>
            <Grid size={{xs:6}}>
                <h2>absorta</h2>
            </Grid>

            <ul>
                <li><Link to="/">Todo</Link></li>
                <li><Link to="/category/mercados">Mercados</Link></li>
                <li><Link to="/category/urbanas">Urbanas</Link></li>
                <li><Link to="/category/animales">Animales</Link></li>
            </ul>

            <CartWidget />

        </div>
    </Grid>
    </>
    )
};