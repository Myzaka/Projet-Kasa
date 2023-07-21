import logo_kasa_black from '../assets/logo/logo_kasa_black.png'
import ('./../style/footer.scss')


export default function Footer() {
    return (
        
            <footer className = 'footer'>
                <img src={logo_kasa_black} className="footer__logo" alt="logo kasa" />
                <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
            </footer>
        
        );
    }