import "./StarField.scss";

const Star = ({ top, left, size }) => (
  <div
    className="star"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
  />
);

export const StarField = ({ count = 200 }) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 2,
  }));

  return (
    <div className="star-field">
      {stars.map(({ id, top, left, size }) => (
        <Star key={id} top={top} left={left} size={size} />
      ))}
    </div>
  );
};
