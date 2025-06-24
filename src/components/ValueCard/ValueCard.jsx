import "./ValueCard.scss";

export const ValueCard = ({ title, description, fade }) => {
  return (
    <div className="value-card" data-aos={fade}>
      <h3 className="value-card__title">{title}</h3>
      <p className="value-card__description">{description}</p>
    </div>
  );
};
