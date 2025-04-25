
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import crowdfundingDrawing from "../../assets/drawings/drawing-crowdfunding.png";
import linkedInLogo from "../../assets/linkedInLogo.png";
import { Footer } from "../../components/Footer/Footer";
import Hero from '../../components/Hero/Hero';
import HorizontalScroll from '../../components/HorizontalScrollBar/HorizontalScroll';
import "../../components/PersonalProjectCard/PersonalProjectCard.scss";
import { TypeWritter } from "../../components/TypeWritter/TypeWritter";
import { ValueCard } from '../../components/ValueCard/ValueCard';
import values from "../../data/values";
import "./Home.scss";

export const Home = () => {

  // Animation du curseur
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor")
    const cursorBefore = document.querySelector(".custom-cursor-before")

    const handleMouseMove = (e) => {
      const x = e.clientX + "px"
      const y = e.clientY + "px"
      if (cursor) {
        cursor.style.left = x
        cursor.style.top = y
      }
      if (cursorBefore) {
        cursorBefore.style.left = x
        cursorBefore.style.top = y
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

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

      <section className="about" id="about">
        <div data-os="fade-up">
          <h2>
            <TypeWritter text={"Ce qui m'anime"} delay={80} initialDelay={500} />
            {/* <img src={lightbulb} alt="drawn lightbulb" /> */}
          </h2>
          <div className="about__cards-wrapper">
            {values.map((value, index) =>
              <ValueCard
                key={`${value.title}${index}`}
                {...value}
                fade={index % 2 === 0 ? "fade-left" : "fade-right"}
              />
            )}
          </div>
        </div>
      </section>

      <section id="portfolio" className="projects" data-aos="fade-up" >
        <h2 className="projects__title" data-aos="fade-left"> Mes Projets ... </h2>

        <div className="projects">
          <h3 className="projects__subtitle">... avec mon école</h3>
          <ul className="projects__cards-wrapper">
            <HorizontalScroll />
          </ul>
        </div>

        <div className="personal-projects" >
          <h3 className="personal-projects__subtitle" >... personnels</h3>
          <ul className="personal-projects__cards-wrapper" >
            {/* {personalProjects.map((project, index) =>
              <PersonalProjectCard
                key={`${project.title}${index}`}
                {...project} />
            )} */}
            <p className="personal-project-card" data-aos="fade-up">De merveilleux projets sont à venir! Patience, patience...</p>
            <img src={crowdfundingDrawing} alt='illustration with a talking woman "A crowdfuning is started for one of them"' className="personal-projects__illustration" data-aos="fade-up" />
          </ul>
        </div>

      </section>

      <section id="contact" className="contact" >
        <h2 className="contact__title" >Viens on travaille ensemble ! </h2>
        <p className="contact__subtitle" >On peut aussi commencer par boire un café. </p>
        <p className="contact__subsubtitle" >Pour moi ce sera bien serré et sans sucre... </p>
        <br />
        <p className="contact__text">Dispo en remote, en freelance ou CDI <br /> en France ou ailleurs 🌍</p>
        <div className="contact__links">
          <Link onClick={handleSendMailTo} className="contact__link">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "white", fontSize: "30px" }} />
          </Link>
          <Link to="https://www.linkedin.com/in/solene-tassel/" className="contact__link link">
            <img src={linkedInLogo} alt="LinkedIn logo" />
          </Link>
        </div>
      </section>

      <Footer />

    </main>
  );
}
