import { useState } from 'react';
import '../style/carrousel.scss'
import biensImmobiliers from '../assets/images/biensImmobiliers.json';

/*export default function Carrousel() {
    
  const logement = biensImmobiliers[0];
  const imagesCarrousel = logement.pictures;
  const titresCarrousel = logement.title;
  const nombreImagesCarrousel = imagesCarrousel.length-1;
  const [index, setIndex] = useState(0);
  function defilDroite(){
    index < nombreImagesCarrousel ? setIndex(index+1) : setIndex(0);
  }
  function defilGauche(){
    index > 0 ? setIndex(index-1) : setIndex(nombreImagesCarrousel);
  }
    return (
      <article className='logement'>
        <img className="logement__images" src={imagesCarrousel[index]} alt={titresCarrousel} />
        <i className="fa-solid fa-circle-chevron-right" onClick={defilDroite}></i>
        <i className="fa-solid fa-circle-chevron-left" onClick={defilGauche}></i>
        <Compteur
          imageActive={index}
          imageTotal={nombreImagesCarrousel}
          />
      </article>
    );
  }*/

export default function Carrousel({logementSelectionne}) {
  
  const logement = biensImmobiliers[logementSelectionne];
  const imagesCarrousel = logement.pictures;
  const titresCarrousel = logement.title;
  const nombreImagesCarrousel = imagesCarrousel.length-1;
  const [index, setIndex] = useState(0);
  const defilDroite=() => index < nombreImagesCarrousel ? setIndex(index+1) : setIndex(0);
  const defilGauche=() => index > 0 ? setIndex(index-1) : setIndex(nombreImagesCarrousel);
  
    return (
      <article className='logement'>
        <img className="logement__images" src={imagesCarrousel[index]} alt={titresCarrousel} />
        <FlechesDefilement
          imageTotal={nombreImagesCarrousel}
          defilDroite = {defilDroite}
          defilGauche = {defilGauche}
          />
        <Compteur
          imageActive={index}
          imageTotal={nombreImagesCarrousel}
          />
      </article>
    );
  }


function FlechesDefilement({defilDroite, defilGauche, imageTotal}) {

  return (
    (imageTotal > 0) &&
    <> 
      <i className="fa-solid fa-circle-chevron-right" onClick={defilDroite}></i>
      <i className="fa-solid fa-circle-chevron-left" onClick={defilGauche}></i>
    </>
  )
}


function Compteur({imageActive, imageTotal}) {
  return(
    (imageTotal > 0) && <div className='compteur'>{imageActive+1}/{imageTotal+1}</div>
  )
}