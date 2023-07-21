import Header from "../components/header";
import Footer2 from "../components/footer2";
import Carrousel from "../components/ficheLogement/ficheLogement__carrousel";
import Selection from "../components/ficheLogement/ficheLogement__selection";
import Tag from "../components/ficheLogement/ficheLogement__tag";
import Collapse from "../components/Collapse";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import biensImmobiliers from "../assets/images/biensImmobiliers.json";
import '../style/ficheLogement/ficheLogement__selection.scss';
import '../style/ficheLogement/ficheLogement.scss';
import Host from "../components/ficheLogement/ficheLogement__host";

export default function FicheLogement() {
  const logementId = useParams().ficheLogementId;
  const logement = biensImmobiliers.find(
    (element) => element.id === logementId
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate("/pageErreur");
    }
  }, [logement, navigate]);

  let content = null;

  if (logement) {
    content = (
      <>
        <Header />
        <Carrousel
        imagesCarrousel= {logement.pictures}
        titresCarrousel= {logement.title}
        />
        <section className="detailLogement">
          <div className="detailLogement__presentation">
            <Selection
            title = {logement.title}
            location = {logement.location}
            />
            <Tag
            tags = {logement.tags}
            />
          </div>
          <Host 
          picture = {logement.host.picture}
          name = {logement.host.name}
          rating = {logement.rating}
          />
        </section>
        <section className="menuDeroulantLogement">
          <div className="menuDeroulantLogement__contenu">
            <Collapse
              titre="Description"
              contenu={logement.description}
            />
          </div>
          <div className="menuDeroulantLogement__contenu">
            <Collapse
              titre="Equipements"
              contenu={logement.equipments.map(
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
