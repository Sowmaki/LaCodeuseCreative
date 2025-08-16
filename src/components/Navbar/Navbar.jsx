import {
  faBriefcase,
  faCommentDots,
  faMoneyBillWave,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Navbar.scss";

export const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    const sections = ["hero", "about", "mesprojets", "tarifs", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveIcon(id);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const isActive = (id) => (activeIcon === id ? "active" : "");

  return (
    <div className="navbar">
      <p className="navbar__title">
        Solène Tassel{" "}
        <span className="navbar__title__disponible"> | disponible</span>
      </p>
      <nav className="navbar__nav">
        <a href="#about" className={`navbar__nav__link ${isActive("about")}`}>
          <span className="navbar__nav__link--icon">
            <FontAwesomeIcon icon={faUserAstronaut} />
          </span>
          <span className="navbar__nav__link--text">Ce qui m'anime</span>
        </a>
        <a
          href="#mesprojets"
          className={`navbar__nav__link ${isActive("mesprojets")}`}
        >
          <span className="navbar__nav__link--icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          <span className="navbar__nav__link--text">Mes Projets</span>
        </a>
        <a href="#tarifs" className={`navbar__nav__link ${isActive("tarifs")}`}>
          <span className="navbar__nav__link--icon">
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </span>
          <span className="navbar__nav__link--text">Tarifs</span>
        </a>
        <a
          href="#contact"
          className={`navbar__nav__link ${isActive("contact")}`}
        >
          <span className="navbar__nav__link--icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          <span className="navbar__nav__link--text">Contact</span>
        </a>
      </nav>
    </div>
  );
};
