import field from "../../assets/field.png";
import landscape from "../../assets/landscape.png";
import { Navbar } from "../Navbar/Navbar";
import { StarField } from "../StarField/StarField";
import { TypeWritter } from "../TypeWritter/TypeWritter";
import "./Hero.scss";

export default function Hero() {

  return (
    <header className="hero">
      <Navbar />
      <StarField />
      <h1><TypeWritter text={'La Codeuse Créative'} delay={100} /></h1>
      <img src={landscape} alt="landscape with shadow of trees by sunset" className="hero__image" />
      <img src={field} className="hero__image__field"></img>

    </header>
  )
}
