import Bandeau from "../components/bandeau";
import Footer2 from "../components/footer2";
import Header from "../components/header";
import Card from "../components/card";
import './../style/root.scss'

export default function Root() {
    return (
      <>
        <Header />
        <section>
          <><Bandeau 
          titre = "Chez vous, partout et ailleurs"
          image = {"./../assets/images/bandeauHome__paysage.png"}
          /></>
        </section>
        
        <section className='offresImmobilieres'>
          <Card 
            titre = "Titre de la location"
            
            />             
            <Card 
            titre = "Titre de la location"/>
          <Card 
            titre = "Titre de la location"/>
          <Card 
            titre = "Titre de la location"/>
          <Card 
            titre = "Titre de la location"/>
          <Card 
            titre = "Titre de la location"/>
        </section>
        <Footer2/>
      </>
    );
  }