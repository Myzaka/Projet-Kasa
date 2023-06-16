import lettre_k from './../assets/logo/lettre_k.png';
import logo_maison from './../assets/logo/logo_maison.png';
import lettre_s from './../assets/logo/lettre_s.png';
import lettre_a from './../assets/logo/lettre_a.png';
import './../style/logo_kasa.scss';

export default function LogoKasa () {
    return (
        <div className="logo_kasa">
            <img src={lettre_k} alt="lettre K" className = 'logo_kasa__lettre' />
            <img src={logo_maison} alt="logo maison" className = 'logo_kasa__lettre' />
            <img src={lettre_s} alt="lettre S" className = 'logo_kasa__lettre' />
            <img src={lettre_a} alt="lettre A" className = 'logo_kasa__lettre' />
        </div> 
    )
}   