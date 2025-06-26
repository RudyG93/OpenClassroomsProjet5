import { useParams, Navigate } from "react-router";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/Logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) return <Navigate to="*" />;

  const {
    title,
    location,
    pictures,
    tags,
    host,
    rating,
    description,
    equipments,
  } = logement;

  return (
    <main className="logement">
      <div className="carousel-container"><Carousel pictures={pictures} /></div>

      <div className="logement__header">
        <div className="logement__infos">
          <h2>{title}</h2>
          <p className="logement__location">{location}</p>
          <div className="logement__tags">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="logement__host-block">
          <div className="logement__host">
            <div className="logement__host-name">
              <span>{host.name.split(" ")[0]}</span>
              {host.name.split(" ")[1] && (
                <span>{host.name.split(" ")[1]}</span>
              )}
            </div>
            <img src={host.picture} alt={host.name} />
          </div>
          <Rating value={Number(rating)} />
        </div>
      </div>

      <div className="logement__details">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}
