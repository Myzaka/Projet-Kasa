import biensImmobiliers from "../../assets/images/biensImmobiliers.json"
import '../../style/ficheLogement/ficheLogement__host.scss'

export default function Host({index}) {
    return(
    <div className="host">
        <div className="host__description">
            <p className="host__description--name">
                {biensImmobiliers[index].host.name}
            </p>
            <img className="host__description--picture" src={biensImmobiliers[index].host.picture} alt={biensImmobiliers[index].host.name} />
        </div>
        <p className='host__rating'>
            {Array.from({ length: 5 }).map((_, i) => (
                <i
                    key={i}
                    className={`fa-solid fa-star ${i < biensImmobiliers[index].rating ? 'active' : ''}`}
                ></i>
                ))}
        </p>
    </div>)
}

