import "../styles/Rating.scss";

export default function Rating({ value = 0 }) {
  const stars = new Array(5).fill(null).map((_, i) => (
    <span key={i} className={i < value ? "star star--full" : "star"}><i class="fa-solid fa-star"></i></span>
  ));
  return <div className="rating">{stars}</div>;
}