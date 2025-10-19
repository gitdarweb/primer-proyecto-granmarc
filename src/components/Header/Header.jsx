import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header>
            <img src="/images/logoGranMarc.png" alt="GranMarc Logo" className="logo" />
            <Nav />
        </header>
    );
};