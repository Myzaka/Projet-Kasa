import '../../style/ficheLogement/ficheLogement__tag.scss'

export default function Tag({tags}) {
    return(
        <ul className='tags'>
            {tags.map((biensImmo) => (
            <li key={biensImmo}>
                <button className="tags__button">{biensImmo}</button>
            </li>
            ))}
        </ul>
    )
}