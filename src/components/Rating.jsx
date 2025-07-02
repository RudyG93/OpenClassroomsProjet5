import "../styles/Rating.scss";

export default function Rating({ value = 0 }) {
  const stars = new Array(5).fill(null).map((_, i) => (
    <span key={i} className={i < value ? "star star--full fa-solid fa-star" : "star fa-solid fa-star"}></span>
  ));
  return <div className="rating">{stars}</div>;
}