import Header from "../components/header";
import Footer2 from "../components/footer2";
import Carrousel from "../components/ficheLogement/ficheLogement__carrousel";
import Selection from "../components/ficheLogement/ficheLogement__selection";
import { useParams } from "react-router";
import biensImmobiliers from "../assets/images/biensImmobiliers.json";
import '../style/ficheLogement/ficheLogement__selection.scss';

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
            </section>
            <section className="menuDeroulantLogement">

            </section>
            
            <Footer2 />
        </>
    )
}

