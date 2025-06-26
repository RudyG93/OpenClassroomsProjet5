import { Link } from "react-router";
import "../styles/Card.scss";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__cover" />
      <span className="card__title">{title}</span>
    </Link>
  );
}
