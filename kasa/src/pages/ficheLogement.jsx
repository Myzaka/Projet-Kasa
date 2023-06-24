import Header from "../components/header";
import Footer2 from "../components/footer2";
import Carrousel from "../components/carrousel";

export default function FicheLogement() {

    return (
        <>
            <Header />
            <Carrousel
                logementSelectionne = {15}
            />
            <Footer2 />
        </>
    )
}

