import { Link } from "react-router";
import gitHubLogo from "../../assets/projects/github-mark-white.svg";
import "./ProjectCard.scss";

export default function ProjectCard({ title, visual, stack, gitHub }) {
  return (
    <li className="project-card">
      {/* <Link to={`/project/id:${id}`} className="project-card__link link">
        <img src={visual} alt={`${title} visual`} />
      </Link> */}

      <img src={visual} alt={title} className="project-card__image" />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__stack">{stack}</p>

      {gitHub ? (
        <Link
          to={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          Voir sur GitHub <img src={gitHubLogo} alt="gitHub logo" />
        </Link>
      ) : null}
    </li>
  );
}
