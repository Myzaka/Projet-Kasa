import Header from "../components/header";
import BandeauApropos from "../components/bandeauApropos";
import Charte from "../components/chartekasa";
import Footer2 from "./../components/footer2.jsx";
import ('./../style/Apropos.scss')

export default function Apropos() {
    return (
        <div>
            <Header />
            <BandeauApropos />
            <section className="engagements">
                <Charte libelle = "Fiabilité" />
                <Charte libelle = "Respect" />
                <Charte libelle = "Service" />
                <Charte libelle = "Sécurité" />
            </section>
            <Footer2 />
        </div>
    )
}