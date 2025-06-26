import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/a-propos">À propos</NavLink>
    </nav>
  );
}

export default Navigation;