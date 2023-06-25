import Header from "../components/header";
import Footer2 from "../components/footer2";
import Carrousel from "../components/ficheLogement/ficheLogement__carrousel";
import Selection from "../components/ficheLogement/ficheLogement__selection";
import Charte from "../components/menuDeroulant";
import { useParams } from "react-router";
import biensImmobiliers from "../assets/images/biensImmobiliers.json";
import '../style/ficheLogement/ficheLogement__selection.scss';
import '../style/ficheLogement/ficheLogement.scss';
import Host from "../components/ficheLogement/ficheLogement__host";

export default function FicheLogement() {

const logementId = useParams().ficheLogementId;
const index = biensImmobiliers.findIndex(element => element.id === logementId);

    return (
        <>
            <Header />
            <Carrousel
                logementSelectionne = {index}
            />
            <section className="detailLogement">
                <Selection
                    index = {index}
                 />
                <Host
                    index = {index}
                />
            </section>
            <section className="menuDeroulantLogement">
                <p className="menuDeroulantLogement__contenu">
                    <Charte
                        titre = "Description"
                        contenu = {biensImmobiliers[index].description}
                    />
                </p>
                <p className="menuDeroulantLogement__contenu">
                    <Charte
                        titre = 'Equipements'
                        contenu = {biensImmobiliers[index].equipments}
                    />    
                </p>
                
            </section>
            
            <Footer2 />
        </>
    )
}

