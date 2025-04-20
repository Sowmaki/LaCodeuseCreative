import { faBriefcase, faCommentDots, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navbar__title">Solène Tassel  <span className="navbar__title__disponible"> | disponible</span></p>
      <nav className="navbar__nav">
        <a onClick={() => console.log('clic')} href='#portfolio' className="navbar__nav__link">
          <span className="navbar__nav__link--icon"><FontAwesomeIcon icon={faBriefcase} /></span>
          <span className="navbar__nav__link--text">Portfolio</span>
        </a>
        <a href='#apropos' className="navbar__nav__link">
          <span className="navbar__nav__link--icon"><FontAwesomeIcon icon={faUserAstronaut} /></span>
          <span className="navbar__nav__link--text">À propos</span>
        </a>
        <a href='#contact' className="navbar__nav__link">
          <span className="navbar__nav__link--icon"><FontAwesomeIcon icon={faCommentDots} /></span>
          <span className="navbar__nav__link--text">Contact</span>
        </a>
      </nav>
    </div>
  )
}