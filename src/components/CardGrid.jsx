import Card from "./Card";
import "../styles/CardGrid.scss";

export default function CardsGrid({ items = [] }) {
  return (
    <section className="cards-container">
      {items.map((it) => (
        <Card key={it.id} {...it} />
      ))}
    </section>
  );
}