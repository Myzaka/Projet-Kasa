import Header from "../components/header";
import Footer2 from "../components/footer2";
import Carrousel from "../components/carrousel";
import { useParams } from "react-router";
import biensImmobiliers from "../assets/images/biensImmobiliers.json"

export default function FicheLogement() {

const logementId = useParams().ficheLogementId;
const index = biensImmobiliers.findIndex(element => element.id === logementId);

    return (
        <>
            <Header />
            <Carrousel
                logementSelectionne = {index}
            />
            <Footer2 />
        </>
    )
}

