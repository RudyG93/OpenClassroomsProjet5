import { useState } from "react";
import "../styles/Carousel.scss";

export default function Carousel({ pictures = [] }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;
  if (total === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="carousel">
      <img src={pictures[index]} alt="logement" className="carousel__img" />

      {total > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prev}
          />
          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={next}
          />
          <span className="carousel__counter">
            {index + 1}/{total}
          </span>
        </>
      )}
    </div>
  );
}