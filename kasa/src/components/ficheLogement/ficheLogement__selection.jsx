import biensImmobiliers from "../../assets/images/biensImmobiliers.json"

export default function Selection({index}) {
    return(
    <div className="selection">
        <p className="selection__title">
            {biensImmobiliers[index].title}
        </p>
        <p className="selection__location">
            {biensImmobiliers[index].location}
        </p>
        <ul className='selection__tags'>
            {biensImmobiliers[index].tags.map((biensImmo) => (
            <li key={index}>
                <button className="selection__tags--button">{biensImmo}</button>
            </li>
            ))}
        </ul>
    </div>)
}

