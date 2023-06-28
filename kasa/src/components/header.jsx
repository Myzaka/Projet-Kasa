import { Link } from "react-router-dom";
import LogoKasa from "./logo_kasa";
import './../style/header.scss';

export default function Header() {
    return (
        
            <header className="header">
                <div className="header__conteneur">
                    <h1><LogoKasa /></h1>
                    <nav >
                        <ul className = 'header__conteneur__navbar'>
                            <li>
                                <Link to={'/'} className = 'header__conteneur__navbar--link'>Accueil</Link>
                            </li>
                            <li>
                                <Link to={'/Apropos'} className = 'header__conteneur__navbar--link'>A propos</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        
        );
    }