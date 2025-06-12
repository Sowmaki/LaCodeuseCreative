import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Solène Tassel — La Codeuse Créative
      </p>
      <div className="footer__links">
        <a href="#mesprojets">Mes Projets</a>
        <a href="#about">Ce qui m'anime</a>
      </div>
    </footer>
  );
};
