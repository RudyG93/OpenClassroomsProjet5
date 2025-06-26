import "../styles/Header.scss";
import Logo from "../assets/logo.png";
import Navigation from "./Navigation";  

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo-kasa" />
      <Navigation />
    </header>
  );
}