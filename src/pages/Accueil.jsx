import Banner from "../components/Banner.jsx";
import logements from "../data/logements.json";
import CardsGrid from "../components/CardGrid";
import "../styles/Accueil.scss";

export default function Accueil() {
  return (
    <main>
      <Banner />
      <CardsGrid items={logements} />
    </main>
  );
}