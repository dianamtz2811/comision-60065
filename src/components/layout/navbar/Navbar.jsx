import { CartWidget } from "../../common/cartWidget/CartWidget"
import "./navbar.css"

export const Navbar = () => {
    return (
        <>
        <div className="container-navbar">
            <img id="image" src="https://res.cloudinary.com/dg3bhw03n/image/upload/v1728361283/carrete_xbf5ra.png" alt="Carrete de Fotografía"/>
            <h2>absorta</h2>

            <ul>
                <li>Todo</li>
                <li>Prints</li>
                <li>Diario de fotografía</li>
                <li>Presets Lightroom</li>
                <li>Blog</li>
            </ul>

            <CartWidget />

        </div>
        </>
    )
};