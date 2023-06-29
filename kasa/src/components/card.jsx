import { Link } from "react-router-dom";
import ('./../style/card.scss');


export default function Card({photo, titre, identifiant}) {
    return(
        <Link className = "card__lien" to={`/ficheLogement/${identifiant}`}>
            <div className="card">
                <img className="card__photo" src={photo} alt={titre} />
                <h2 className="card__titre">{titre}</h2>
            </div>
        </Link>
    )
}

