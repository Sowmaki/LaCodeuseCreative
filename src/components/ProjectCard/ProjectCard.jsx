import "./ProjectCard.scss"

export default function ProjectCard({ title, visual, stack, gitHub }) {
  return (
    <li className="project-card">
      <img src={visual} alt={title} className="project-card__image" />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__stack">{stack}</p>

      {gitHub ?
        <a
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          Voir sur GitHub
        </a>
        :
        null
      }
    </li>
  )
}
