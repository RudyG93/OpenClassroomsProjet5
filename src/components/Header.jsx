import "../styles/Header.scss";
import Logo from "../assets/logo.png";
import Navigation from "./Navigation";  

export default function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={Logo} alt="logo-kasa" /></div>
      <Navigation />
    </header>
  );
}