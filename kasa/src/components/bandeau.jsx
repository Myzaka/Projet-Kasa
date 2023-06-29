import ('../style/bandeau.scss')

export default function Bandeau({titre, image, image__name}) {
    return (
            <section className='bandeau'>
                <img src={image} alt={titre} className = {image__name} />
                <p className = 'bandeau__titre'>{titre}</p>
                
            </section>
                
    )
}