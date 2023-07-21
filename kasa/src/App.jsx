import Bandeau from "./components/bandeau";
import Footer from "./components/footer";
import Header from "./components/header";
import BiensImmobiliers from "./components/biensImmobiliers";
import bandeauHome__paysage from './assets/images/bandeauHome__paysage.png';
import './style/App.scss';

export default function App() {
  return  (
    <>
      <Header />
      
      <Bandeau 
        titre = "Chez vous, partout et ailleurs"
        image = {bandeauHome__paysage}
        taille='petit'
      />
      
      <section className='offresImmobilieres'>
        <BiensImmobiliers />
      </section>
      <Footer />
    </>
  );
}
