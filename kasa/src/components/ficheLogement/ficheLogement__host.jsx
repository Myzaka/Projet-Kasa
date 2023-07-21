import '../../style/ficheLogement/ficheLogement__host.scss'

export default function Host({picture, name, rating}) {
    return(
    <div className="host">
        <div className="host__description">
            <p className="host__description--name">
                {name}
            </p>
            <img className="host__description--picture" src={picture} alt={name} />
        </div>
        <p className='host__rating'>
            {Array.from({ length: 5 }).map((_, i) => (
                <i
                    key={i}
                    className={`fa-solid fa-star ${i < rating ? 'active' : ''}`}
                ></i>
                ))}
        </p>
    </div>)
}