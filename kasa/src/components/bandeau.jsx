import ('./../style/bandeau.scss')


export default function Bandeau({titre, image}) {
    return (
        <div className = "bandeau">{titre}</div>
    )
}