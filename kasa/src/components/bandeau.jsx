import ('../style/bandeau.scss')

export default function Bandeau({titre, image}) {
    return (
            <section className='bandeau'>
                <img src={image} alt={titre} className = 'bandeau__image' />
                <p className = 'bandeau__titre'>{titre}</p>
            </section>
                
    )
}