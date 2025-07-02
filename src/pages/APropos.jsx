import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/APropos.scss";
import BannerImg from "../assets/banner2.png";
import Apropos from "../data/apropos.json";

export default function APropos() {
  const sections = Apropos;
  
  return (
    <main className="apropos">
      <Banner image={BannerImg} alt="Paysage de montagne" />
      
      <section className="apropos__collapses">
        {sections.map(({ title, text }) => (
          <Collapse key={title} title={title}>
            <p>{text}</p>
          </Collapse>
        ))}
      </section>
    </main>
  );
}
