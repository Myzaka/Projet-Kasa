import Bandeau from "./components/bandeau";
import Footer2 from "./components/footer2";
import Header from "./components/header";
import BiensImmobiliers from "./components/biensImmobiliers";
import bandeauHome__paysage from './assets/images/bandeauHome__paysage.png';
import './style/root.scss'
import './style/App.scss';

export default function App() {
  return  (
    <>
      <Header />
      
      <Bandeau 
        titre = "Chez vous, partout et ailleurs"
        image = {bandeauHome__paysage}
      />
        
        
      
      
      <section className='offresImmobilieres'>
        <BiensImmobiliers />
      </section>
      <Footer2 />
    </>
  );
}
