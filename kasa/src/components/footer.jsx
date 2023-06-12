import LogoKasa from "./logo_kasa";
import './../style/footer.css';

export default function Footer() {
    return (
        
            <footer class = 'footer'>
                <p class = 'footer__logo'><LogoKasa /></p>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        
        );
    }