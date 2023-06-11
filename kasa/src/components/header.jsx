import { Link } from "react-router-dom";
import LogoKasa from "./logo_kasa";
import './../style/header.css';

export default function Header() {
    return (
        
            <div class = 'header'>
                <h1><LogoKasa /></h1>
                <nav >
                    <ul class = 'header__navbar'>
                        <li>
                            <Link to={'/'} class = 'header__navbar__link'>Accueil</Link>
                        </li>
                        <li>
                            <Link to={'Apropos'} class = 'header__navbar__link'>A propos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        
        );
    }