import ('../style/bandeau.scss')

export default function Bandeau({titre, image, taille}) {
    return (
            <section className='bandeau'>
                <img src={image} alt={titre} className = {taille === 'grand' ? 'bandeau__image--grand' : 'bandeau__image'} />
                <p className = 'bandeau__titre'>{titre}</p>
                
            </section>
                
    )
}