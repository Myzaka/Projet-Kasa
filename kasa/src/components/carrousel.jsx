import ('../assets/images/biensImmobiliers.json');

export default function Carrousel({listePhotos, titre}) {
      
    return (
      <img className='carrousel' alt={titre} >
        {listePhotos[0]}
      </img>
    );
  }