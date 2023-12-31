import { useState } from 'react';
import '../../style/ficheLogement/ficheLogement__carrousel.scss';


export default function Carrousel({logementSelectionne, imagesCarrousel, titresCarrousel}) {
  
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

      <i className="fa-solid fa-chevron-right" onClick={defilDroite}></i>
      <i className="fa-solid fa-chevron-left" onClick={defilGauche}></i>
    </>
  )
}


function Compteur({imageActive, imageTotal}) {
  return(
    (imageTotal > 0) && <div className='compteur'>{imageActive+1}/{imageTotal+1}</div>
  )
}

