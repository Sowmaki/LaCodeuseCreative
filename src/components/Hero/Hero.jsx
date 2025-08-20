import field from "../../assets/field.png";
import landscape from "../../assets/landscape.png";
import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { StarField } from "../StarField/StarField";
import { TypeWritter } from "../TypeWritter/TypeWritter";
import "./Hero.scss";

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <Navbar />
      <StarField />
      <h1
        style={{ fontFamily: "Handjet", fontSize: "1.5rem", fontWeight: 300 }}
        className="hero__title"
      >
        <TypeWritter text={"La Codeuse Créative"} delay={100} />
        <br />
        Développeuse Front <br /> Graphiste
        <Logo />
      </h1>
      <img
        src={landscape}
        alt="landscape with shadow of trees by sunset"
        className="hero__image"
        loading="lazy"
      />
      <img src={field} className="hero__image__field"></img>
    </header>
  );
}
