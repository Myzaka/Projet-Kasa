import { useState } from 'react';
import ('./../style/menuDeroulant.scss')

export default function Charte ({titre, children}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
        <div className="menuDeroulant">
            {titre}
            <i className="fa-solid fa-chevron-up" onClick={() => isActive ? setIsActive(false) : setIsActive(true)}></i>
        </div>
        {isActive ?
        <div className={`menuDeroulant__contenu ${isActive ? 'active' : ''}`}>
            <p>{children}</p>
        </div>
        //<div className='menuDeroulant__contenu'><p>{children}</p></div>
        :
        null
        }
        </>
    )
}



