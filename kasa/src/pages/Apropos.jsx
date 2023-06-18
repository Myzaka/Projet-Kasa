import Header from "../components/header";
import BandeauApropos from "../components/bandeauApropos";
import Charte from "../components/menuDeroulant";
import Footer2 from "./../components/footer2.jsx";
import ('./../style/Apropos.scss')

export default function Apropos() {
    return (
        <div>
            <Header />
            <BandeauApropos />
            <section className="engagements">
                <Charte titre = "Fiabilité">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes.
                </Charte>
                <Charte titre = "Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Charte>
                <Charte titre = "Service">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Charte>
                <Charte titre = "Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes.
                </Charte>
            </section>
            <Footer2 />
        </div>
    )
}