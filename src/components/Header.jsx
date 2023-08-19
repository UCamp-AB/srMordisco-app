import logo from "../assets/Logo.jpg";
import '../App.css';
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header-container">

            <Link to={'/'} ><img src={logo} alt="Logo" /></Link>
            <h1>Sr. Mordisco</h1>
            <ul className="nav nav-pills nav-underline">
                <li className="nav-item"><Link className="nav-link text-decoration-none" to={'/inicio'}>Inicio</Link></li>
                <li className="nav-item"><Link className="nav-link text-decoration-none" to={'/nosotros'}>Acerca de Nosotros</Link></li>
                <li className="nav-item"><Link className="nav-link text-decoration-none" to={'/Menu'}>Menú</Link></li>
            </ul>
        </header>
    );
}

export default Header;