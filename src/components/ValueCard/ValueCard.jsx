export const ValueCard = ({ icon, title, description }) => {
  return (
    <div>
      <h3 className="values__card card">{icon} {title}</h3>
      <p>{description}</p>
    </div>
  )
}