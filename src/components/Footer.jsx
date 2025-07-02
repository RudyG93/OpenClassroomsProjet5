import LogoFooter from "../assets/logo-footer.png";
import "../styles/Footer.scss";

function Footer() {
  return (
      <footer className="footer">
        <img className="footer__img" src={LogoFooter} alt="logo-kasa" />
        <div className="footer__text"><p>© 2020 Kasa. All rights reserved.</p></div>
      </footer>
  );
}

export default Footer;
