import "../styles/Header.scss";
import Logo from "../assets/logo.png";
import Navigation from "./Navigation";  

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo-kasa" />
      <Navigation />
    </header>
  );
}

export default Header;
