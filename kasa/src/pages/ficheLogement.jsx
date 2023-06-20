import Header from "../components/header";
import Footer2 from "../components/footer2";
import Carrousel from "../components/carrousel";
import ('../assets/images/biensImmobiliers.json');

export default function FicheLogement() {

    const logement = require('../assets/images/biensImmobiliers.json');
    return (
        <>
            <Header />

            <Footer2 />
        </>
    )
}

