import ('./../style/card.css')

export default function Card({photo, titre}) {
    return(
        <div class="card">
        <h2 class="card__titre">{titre}</h2>
        </div>
    )
}