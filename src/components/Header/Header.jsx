import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="Header">
      {/* <img src="" alt="logo du site" /> */}
      <nav>
        <Link to="/portfolio">
          <div>Portfolio</div>
        </Link>
      </nav>
    </div>
  )
}