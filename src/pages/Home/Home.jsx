import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import crowdfundingDrawing from "../../assets/drawings/drawing-crowdfunding.png";
import linkedInLogo from "../../assets/linkedInLogo.png";
import { Footer } from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import HorizontalScroll from "../../components/HorizontalScrollBar/HorizontalScroll";
import "../../components/PersonalProjectCard/PersonalProjectCard.scss";
import { TypeWritter } from "../../components/TypeWritter/TypeWritter";
import { ValueCard } from "../../components/ValueCard/ValueCard";
import values from "../../data/values";
import "./Home.scss";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import StaticBackground from "../../components/StaticBackground/StaticBackground";

export const Home = () => {
  // Animation du curseur
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorBefore = document.querySelector(".custom-cursor-before");

    const handleMouseMove = (e) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      if (cursor) {
        cursor.style.left = x;
        cursor.style.top = y;
      }
      if (cursorBefore) {
        cursorBefore.style.left = x;
        cursorBefore.style.top = y;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSendMailTo = () => {
    window.location.href = "mailto:sos@so.com";
  };

  return (
    <main className="homepage">
      <Hero />
      <ScrollToTopButton />

      <section className="about" id="about">
        <div data-os="fade-up">
          <h2>
            <TypeWritter
              text={"Ce qui m'anime"}
              delay={80}
              initialDelay={500}
            />
            {/* <img src={lightbulb} alt="drawn lightbulb" /> */}
          </h2>
          <div className="about__cards-wrapper">
            {values.map((value, index) => (
              <ValueCard
                key={`${value.title}${index}`}
                {...value}
                fade={index % 2 === 0 ? "fade-left" : "fade-right"}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="mesprojets" className="projects" data-aos="fade-up">
        <h2 className="projects__title" data-aos="fade-left">
          {" "}
          Mes Projets ...{" "}
        </h2>

        <div className="projects">
          <h3 className="projects__subtitle">... avec mon école</h3>
          <ul className="projects__cards-wrapper">
            <HorizontalScroll />
          </ul>
        </div>

        <div className="personal-projects">
          <h3 className="personal-projects__subtitle">... personnels</h3>
          <div className="personal-projects__cards-wrapper">
            {/* {personalProjects.map((project, index) =>
              <PersonalProjectCard
                key={`${project.title}${index}`}
                {...project} />
            )} */}
            <p className="personal-project-card" data-aos="fade-up">
              De merveilleux projets sont à venir! Patience, patience...
            </p>
            <div className="personal-projects__crowdfunding">
              <img
                src={crowdfundingDrawing}
                alt='illustration with a talking woman "A crowdfuning is started for one of them"'
                className="personal-projects__crowdfunding--illustration"
                data-aos="fade-up"
              />
              <div className="personal-projects__crowdfunding--circle">
                Lien bientôt disponible <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tarifs" className="tarifs" data-aos="fade-up">
        <h2 className="tarifs__title" data-aos="fade-left">
          Tarifs
        </h2>
        <div className="tarifs__tables">
          {/* Table 1 : Graphisme / Identité visuelle */}
          <h3>Graphisme / Identité visuelle</h3>
          <table className="tarifs__table">
            <tbody>
              <tr>
                <td>Logo seul</td>
                <td>400 €</td>
              </tr>
              <tr>
                <td>
                  Identité visuelle complète <br />
                  <small>(logo + couleurs + typo + déclinaisons réseaux)</small>
                </td>
                <td>1200 €</td>
              </tr>
              <tr>
                <td>
                  Carte de menu <br />
                  <small>(impression incluse non comprise)</small>
                </td>
                <td>200 €</td>
              </tr>
              <tr>
                <td>Flyers / affiches / visuels événementiels</td>
                <td>150 €</td>
              </tr>
              <tr>
                <td>
                  Pack "com de lancement" <br />
                  <small>(logo + menu + flyer + visuels RS)</small>
                </td>
                <td>800 €</td>
              </tr>
            </tbody>
          </table>
          {/* Table 2 : Site Web / Dev */}
          <h3>Site Web / Dev</h3>
          <table className="tarifs__table">
            <tbody>
              <tr>
                <td>
                  Site vitrine simple <br />
                  <small>(1 page, responsive, QR code)</small>
                </td>
                <td>600 €</td>
              </tr>
              <tr>
                <td>
                  Site complet <br />
                  <small>
                    (3 à 5 pages : accueil, carte/menu, contact, etc.)
                  </small>
                </td>
                <td>1000€</td>
              </tr>
              <tr>
                <td>Ajout de QR code dynamique pour menu / site inclus</td>
                <td>80 €</td>
              </tr>
              <tr>
                <td>Refonte site existant (design + dev)</td>
                <td>800 €</td>
              </tr>
              <tr>
                <td>Maintenance / mises à jour (mensuel ou ponctuel)</td>
                <td>80 €/mois</td>
              </tr>
            </tbody>
          </table>
          {/* Table 3 : Dev outils simples */}
          <h3>Dev outils simples</h3>
          <table className="tarifs__table">
            <tbody>
              <tr>
                <td>
                  Logiciel de facturation simple <br />
                  <small>(produits, clients, PDF)</small>
                </td>
                <td>900–1500 €</td>
              </tr>
              <tr>
                <td>Dashboard simple (ventes, commandes, stats)</td>
                <td>1000–1600 €</td>
              </tr>
              <tr>
                <td>Intégration avec caisse/tablette (si besoin)</td>
                <td>sur devis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="contact__title">Viens on travaille ensemble ! </h2>
        <p className="contact__subtitle">
          On peut aussi commencer par boire un café.{" "}
        </p>
        <p className="contact__subsubtitle">
          Pour moi ce sera bien serré et sans sucre...{" "}
        </p>
        <br />
        <p className="contact__text">
          Dispo en remote, en freelance ou CDI <br /> en France ou ailleurs 🌍
        </p>
        <div className="contact__links">
          <Link onClick={handleSendMailTo} className="contact__link">
            <span className="sr-only">Email</span>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "white", fontSize: "30px" }}
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/solene-tassel/"
            className="contact__link link"
          >
            <span className="sr-only">LinkedIn</span>
            <img src={linkedInLogo} alt="LinkedIn logo" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};
