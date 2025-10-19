import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
    const {getTotalItems} = useCartContext()
    //Dejamos los Link preparados para cuando hagamos filtrado por categoria
    //Por ahora, quedan de vista, pero sirven al tocar para escribir la ruta
    //en la barra de busqueda
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/salado"}>Protecciones</Link>
                </li>
                <li>
                    <Link to={"/category/dulce"}>Focos</Link>
                </li>
                <li>
                    <Link to={"/carrito"}>Carrito</Link>
                    {getTotalItems() > 0 &&(
                      <span>{getTotalItems()}</span>
          )}
                </li>
            </ul>
        </nav>
    );
};