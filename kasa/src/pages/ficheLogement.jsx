import Header from "../components/header";
import Footer2 from "../components/footer2";
import Carrousel from "../components/ficheLogement/ficheLogement__carrousel";
import Selection from "../components/ficheLogement/ficheLogement__selection";
import Collapse from "../components/Collapse";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import biensImmobiliers from "../assets/images/biensImmobiliers.json";
import '../style/ficheLogement/ficheLogement__selection.scss';
import '../style/ficheLogement/ficheLogement.scss';
import Host from "../components/ficheLogement/ficheLogement__host";

export default function FicheLogement() {
  const logementId = useParams().ficheLogementId;
  const indexRecherche = biensImmobiliers.findIndex(
    (element) => element.id === logementId
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (indexRecherche === -1) {
      navigate("/pageErreur");
    }
  }, [indexRecherche, navigate]);

  let content = null;

  if (indexRecherche !== -1) {
    content = (
      <>
        <Header />
        <Carrousel logementSelectionne={indexRecherche} />
        <section className="detailLogement">
          <Selection index={indexRecherche} />
          <Host index={indexRecherche} />
        </section>
        <section className="menuDeroulantLogement">
          <div className="menuDeroulantLogement__contenu">
            <Collapse
              titre="Description"
              contenu={biensImmobiliers[indexRecherche].description}
            />
          </div>
          <div className="menuDeroulantLogement__contenu">
            <Collapse
              titre="Equipements"
              contenu={biensImmobiliers[indexRecherche].equipments.map(
                (biensImmo) => (
                  <li key={biensImmo}>{biensImmo}</li>
                )
              )}
            />
          </div>
        </section>
        <Footer2 />
      </>
    );
  }

  return content;
}
