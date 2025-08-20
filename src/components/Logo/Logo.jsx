import "./Logo.scss";
import cercle1 from "../../assets/logo/cercle1.png";
import cercle2 from "../../assets/logo/cercle2.png";
import cercle3 from "../../assets/logo/cercle3.png";
// Ajoute d'autres cercles si besoin

export const Logo = () => (
  <div className="logo">
    <img
      src={cercle1}
      alt="cercle arrière"
      className="logo__circle logo__circle--1"
      loading="lazy"
    />
    <img
      src={cercle2}
      alt="cercle milieu"
      className="logo__circle logo__circle--2"
      loading="lazy"
    />
    <img
      src={cercle3}
      alt="Logo de Solène Tassel, développeuse web et graphiste freelance"
      className="logo__circle logo__circle--3"
      loading="lazy"
    />
  </div>
);
