import { BrowserRouter as Router, Routes, Route } from "react-router";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Logement from "./pages/Logement";
import Erreur from "./pages/Erreur";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.scss";

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
