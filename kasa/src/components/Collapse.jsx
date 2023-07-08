import { useState } from 'react';
import ('./../style/menuDeroulant.scss')

export default function Collapse ({titre, contenu}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
        <div className="menuDeroulant">
            {titre}
            <i className={isActive ? "fa-solid fa-chevron-up active" : "fa-solid fa-chevron-up"} onClick={() => isActive ? setIsActive(false) : setIsActive(true)}></i>
        </div>
        <p className={isActive ? "menuDeroulant__contenu active" : "menuDeroulant__contenu"}>{contenu}</p>
        </>
    )
}



