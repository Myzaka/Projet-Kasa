import Card from './card';
import biensImmobiliers from '../assets/images/biensImmobiliers.json';
import ('../style/biensImmobiliers.scss');



export default function BiensImmobiliers() {
  
    return (
      <ul className='biensImmobiliers'>
        {biensImmobiliers.map((biensImmo) => (
          <li className = "biensImmobiliers__liste" key={biensImmo.id}>
            <Card photo={biensImmo.cover} titre={biensImmo.title} identifiant = {biensImmo.id} />
          </li>
        ))}
      </ul>
    );
  }