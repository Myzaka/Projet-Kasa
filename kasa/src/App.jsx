import Bandeau from "./components/bandeau";
import Footer2 from "./components/footer2";
import Header from "./components/header";
import BiensImmobiliers from "./components/biensImmobiliers";
import './style/root.scss'
import './style/App.scss';

export default function App() {
  return  (
    <>
      <Header />
      <section>
        <><Bandeau 
        titre = "Chez vous, partout et ailleurs"/></>
      </section>
      
      <section className='offresImmobilieres'>
        <BiensImmobiliers />
      </section>
      <Footer2 />
    </>
  );
}
