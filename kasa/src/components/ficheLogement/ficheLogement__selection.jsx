export default function Selection({title, location}) {
    return(
    <div className="selection">
        <p className="selection__title">
            {title}
        </p>
        <p className="selection__location">
            {location}
        </p>
    </div>)
}