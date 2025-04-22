import "./ValueCard.scss"

export const ValueCard = ({ icon, title, description, fade }) => {
  return (
    <div className="value-card" data-aos={fade}>
      <h3 className="value-card__title">{icon} {title}</h3>
      <p className="value-card__description">{description}</p>
    </div>
  )
}