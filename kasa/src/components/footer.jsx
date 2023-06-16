import LogoKasa from "./logo_kasa";
import './../style/footer.scss';

export default function Footer() {
    return (
        
            <footer className = 'footer'>
                <p className = 'footer__logo'><LogoKasa /></p>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        
        );
    }