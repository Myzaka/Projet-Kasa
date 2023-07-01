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
const indexRecherche = biensImmobiliers.findIndex(element => element.id === logementId);

    return (
        <>
            <Header />
            <Carrousel
                logementSelectionne = {indexRecherche}
            />
            <section className="detailLogement">
                <Selection
                    index = {indexRecherche} //pb de double key à identifier
                 />
                <Host
                    index = {indexRecherche}
                />
            </section>
            <section className="menuDeroulantLogement">
                <div className="menuDeroulantLogement__contenu">
                    <Charte
                        titre = "Description"
                        contenu = {biensImmobiliers[indexRecherche].description}
                    />
                </div>
                <div className="menuDeroulantLogement__contenu">
                    <Charte
                        titre = 'Equipements'
                        contenu = 
                        {biensImmobiliers[indexRecherche].equipments.map((biensImmo) => (
                          <li key={biensImmo}>
                            {biensImmo}
                          </li>
                        ))}
                      

                    />    
                </div>
                
            </section>
            
            <Footer2 />
        </>
    )
}

