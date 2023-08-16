import logo from "../assets/Logo.jpg";
import '../App.css';

function Header() {
    return (
    <header className="header-container">
        <img src={logo} alt="Logo" />
        <h1>Sr. Mordisco </h1>
        <ul>
            <li>Acerca de Nosotros</li>
            <li>Menú</li>
            <li>Sedes</li>
            <li>Contáctanos</li>
        </ul>
    </header>
    );
}

export default Header;