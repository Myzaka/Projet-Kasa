import Header from "../components/header";
import Bandeau from "../components/bandeau";
import Collapse from "../components/Collapse";
import Footer2 from "./../components/footer2.jsx";
import bandeauApropos from './../assets/images/bandeauApropos.png';
import ('./../style/Apropos.scss')

export default function Apropos() {
    return (
        <>
            <Header />
            <Bandeau
                titre=""
                image={bandeauApropos}
                taille='grand'
            />
            <section className="engagements">
                <Collapse
                    titre = "Fiabilité"
                    contenu = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                 />
                
                <Collapse
                    titre = "Respect"
                    contenu = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."  
                 />
                
                <Collapse
                    titre = "Service"
                    contenu = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                 />

                <Collapse
                    titre = "Sécurité"
                    contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes."
                 />
            </section>
            <Footer2 />
        </>
    )
}