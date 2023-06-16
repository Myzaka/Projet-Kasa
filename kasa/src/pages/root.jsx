import Bandeau from "../components/bandeau";
import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";
import './../style/root.scss'

export default function Root() {
    return (
      <>
        <Header />
        <section>
          <><Bandeau 
          titre = "Chez vous, partout et ailleurs"/></>
        </section>
        
        <section className='offresImmobilieres'>
          <Card 
            titre = "Ceci est un titre"/>             
            <Card 
            titre = "Ceci est un titre"/>
          <Card 
            titre = "Ceci est un titre"/>
          <Card 
            titre = "Ceci est un titre"/>
          <Card 
            titre = "Ceci est un titre"/>
          <Card 
            titre = "Ceci est un titre"/>
        </section>
        <Footer />
      </>
    );
  }