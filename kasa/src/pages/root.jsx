import Bandeau from "../components/bandeau";
import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";
import './../style/root.css'

export default function Root() {
    return (
      <>
        <Header />
        <section>
          <><Bandeau 
          titre = "Chez vous, partout et ailleurs"/></>
        </section>
        
        <section class='offresImmobilieres'>
          <Card 
            titre = "Ceci est un titre"/>
        </section>
        <Footer />
      </>
    );
  }