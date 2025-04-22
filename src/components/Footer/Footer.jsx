import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Solène Tassel — La Codeuse Créative</p>
      <div className="footer__links">
        <a href="#portfolio">Portfolio</a>
        <a href="#apropos">À propos</a>
      </div>
    </footer>
  );
};
