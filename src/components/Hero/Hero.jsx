import { useEffect, useRef } from "react"
import { Navbar } from "../Navbar/Navbar"
import "./Hero.scss"

export default function Hero() {
  const orbRef = useRef(null)

  useEffect(() => {
    const orb = orbRef.current

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      orb.style.transform = `translate(${clientX}px, ${clientY}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="hero">
      <Navbar />
      <div className="hero__orb" ref={orbRef}></div>
      <h1 className="hero__title">La Codeuse Créative</h1>

    </section>
  )
}
