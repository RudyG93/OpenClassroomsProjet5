import "../styles/Banner.scss";

export default function Banner({ image, alt, children }) {
  return (
    <section className="banner-container">
      <div className="banner">
        <img src={image} alt={alt || "bannière"} />
        {children}
      </div>
    </section>
  );
}
