
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from "react-router";
import Hero from '../../components/Hero/Hero';
import HorizontalScroll from '../../components/HorizontalScrollBar/HorizontalScroll';
import { ValueCard } from '../../components/ValueCard/ValueCard';
import values from "../../data/values";
import "./Home.scss";

export const Home = () => {

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setActiveProjectId(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSendMailTo = () => console.log('send mail!');


  return (
    <main className="homepage">

      <div className="custom-cursor"></div>
      <div className="custom-cursor-before"></div>
      {/* <Header /> */}

      <Hero />
      <section className="homepage__hero">
        <h1 className="homepage__hero__title">
          Développeuse Front-End & Creative Coder 🌿
        </h1>
        <p className="homepage__hero__description">
          J’imagine des expériences web sensibles, immersives et éco-conçues. Code, design et créativité réunis.
        </p>
        <div className="homepage__hero__links">
          <Link to={{ hash: "#projets" }} className="link">Voir mes projets</Link>
          <Link to={{ hash: "#contact" }} className="link">Me contacter</Link>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="values" data-aos="fade-up">
        <h2 className="values__title" data-aos="fade-right">Ce qui m'anime ✨</h2>
        <div className="values__cards-wrapper">
          {values.map((value, index) =>
            <ValueCard
              key={`${value.title}${index}`}
              {...value}
            />
          )}
        </div>
      </section>

      {/* Projets Section */}
      <section id="projects" className="projects" data-aos="fade-left" >
        <h2 className="projects__title" data-aos="fade-left">Projets </h2>
        <div className="projects__cards-wrapper">
          <HorizontalScroll />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" data-aos="fade-up" >
        <h2 className="contact__title" data-aos="fade-right">On travaille ensemble ? 💌</h2>
        <p className="contact__text">Dispo en remote, en freelance ou CDI — en France ou ailleurs 🌍</p>
        <Link onClick={handleSendMailTo} className="contact__link link">
          Écris-moi
        </Link>
      </section>
      <Link to={{ hash: "#contact" }} className="underline text-green-700 hover:text-green-900">
        <button className="contact-me-button">
          <FontAwesomeIcon icon={faComments} />
        </button>
      </Link>
    </main>
  );
}
