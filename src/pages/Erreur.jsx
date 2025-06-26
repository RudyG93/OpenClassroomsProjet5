import { Link } from "react-router";
import "../styles/Erreur.scss";

export default function Erreur() {
  return (
    <div className="erreur">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="erreur__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
