import { useState } from 'react';
import '../style/carrousel.scss'
import ('../assets/images/biensImmobiliers.json');

export default function Carrousel() {
    
  const logement = require('../assets/images/biensImmobiliers.json');
  const imagesCarrousel = logement[0].pictures;
  const titresCarrousel = logement[0].title;
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
        <i class="fa-solid fa-circle-chevron-right" onClick={defilDroite}></i>
        <i class="fa-solid fa-circle-chevron-left" onClick={defilGauche}></i>
        {console.log(index)}
      </article>
    );
  }