import Banner from "../components/Banner.jsx";
import logements from "../data/logements.json";
import CardsGrid from "../components/CardGrid";
import BannerImg from "../assets/banner.png";

export default function Accueil() {
  return (
    <div>
      <Banner image={BannerImg} alt="">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <CardsGrid items={logements} />
    </div>
  );
}
