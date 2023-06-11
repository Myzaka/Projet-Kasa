import lettre_k from './../assets/logo/lettre_k.png';
import logo_maison from './../assets/logo/logo_maison.png';
import lettre_s from './../assets/logo/lettre_s.png';
import lettre_a from './../assets/logo/lettre_a.png';
import './../style/logo_kasa.css';

export default function LogoKasa () {
    return (
        <div class="logo_kasa">
            <img src={lettre_k} alt="lettre K" class = 'logo_kasa__lettre' />
            <img src={logo_maison} alt="logo maison" class = 'logo_kasa__lettre' />
            <img src={lettre_s} alt="lettre S" class = 'logo_kasa__lettre' />
            <img src={lettre_a} alt="lettre A" class = 'logo_kasa__lettre' />
        </div> 
    )
}   