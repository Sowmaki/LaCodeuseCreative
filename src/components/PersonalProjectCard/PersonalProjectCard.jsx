import "./PersonalProjectCard.scss"

export const PersonalProjectCard = ({ title, description, status }) => {
  return (
    <li className="personal-project-card" data-aos="fade-up">
      <h4 className="personal-project-card__title">{title}</h4>
      <p className="personal-project-card__description">{description}</p>
      <p className="personal-project-card__status">{status}</p>
    </li>
  )
}