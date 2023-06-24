import Card from './card';
import ('../style/biensImmobiliers.scss');
import ('../assets/images/biensImmobiliers.json');


export default function BiensImmobiliers() {
    const biensImmobiliers = require('../assets/images/biensImmobiliers.json');
  
    return (
      <ul className='biensImmobiliers'>
        {biensImmobiliers.map((biensImmo) => (
          <li key={biensImmo.id}>
            <Card photo={biensImmo.cover} titre={biensImmo.title} />
          </li>
        ))}
      </ul>
    );
  }