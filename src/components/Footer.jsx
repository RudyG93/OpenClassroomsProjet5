import LogoFooter from "../assets/logo-footer.png";
import "../styles/Footer.scss";

function Footer() {
  return (
      <footer>
        <img src={LogoFooter} alt="logo-kasa" />
        <p>© 2020 Kasa. All rights reserved.</p>
      </footer>
  );
}

export default Footer;
