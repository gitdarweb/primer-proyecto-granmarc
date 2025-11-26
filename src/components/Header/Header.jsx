import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom"; // 👈 Importa Link


export const Header = () => {
    return (
        <header>
            {/* Envolvemos la imagen con Link */}
            <Link to="/">
                <img src="/images/logoGranMarc.png" alt="GranMarc Logo" className="logo" />
            </Link>
            <Nav />

        </header>
    );
};