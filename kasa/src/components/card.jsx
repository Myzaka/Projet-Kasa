import ('./../style/card.scss')
import ('./../assets/images/biensImmobiliers.json')

export default function Card({photo, titre}) {
    return(
        <div className="card">
        <h2 className="card__titre">{titre}</h2>
        </div>
    )
}