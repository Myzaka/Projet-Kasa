import ('./../style/bandeau.scss')

export default function Bandeau({titre}) {
    return (
        <div className = "bandeau">{titre}</div>
    )
}