import "../styles/Banner.scss";

export default function Banner({ image, alt, children }) {
  return (
    <section className="banner">
      <img src={image} alt={alt || "bannière"} />
      {children}
    </section>
  );
}