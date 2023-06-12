import Footer from "../components/footer";
import Header from "../components/header";
import './../style/root.css'

export default function Root() {
    return (
      <>
        <Header />
        <section class='bandeauHome'>
          Chez vous, partout et ailleurs
        </section>
        <section class='offresImmobilieres'>
          TEST
        </section>
        <Footer />
      </>
    );
  }