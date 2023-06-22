import { Link } from "react-router-dom";
import LogoKasa from "./logo_kasa";
import './../style/header.scss';

export default function Header() {
    return (
        
            <header className = 'header'>
                <h1><LogoKasa /></h1>
                <nav >
                    <ul className = 'header__navbar'>
                        <li>
                            <Link to={'/'} className = 'header__navbar__link'>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'/Apropos'} className = 'header__navbar__link'>A propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        
        );
    }