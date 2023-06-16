import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Header from "../components/header";
import './../style/error-page.scss'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <h1 className="erreur">404</h1>
      <h2 className="erreur__libelle">Oups ! La page que vous demandez n'existe pas.</h2>
      <Link to={'/'} className = 'erreur__Home'>Retourner sur la page d'accueil</Link>
    </div>
  );
}