export const Section = ({ title, cards }) => {
  return (
    <section className="section" >
      <h2 className="section__title title-transition">Ce qui m'anime ✨</h2>
      <div className="section__cards-wrapper">
        {cards.map(card => {
          <div className="card">
            <h3 className="card__title">{card.icon} {card.title}</h3>
            <p>Un regard artistique pour des interfaces uniques et inspirées.</p>
          </div>
        })}

        <div>
          <h3 className="card">💚 Green Code</h3>
          <p>Des choix techniques conscients pour un web plus responsable.</p>
        </div>
        <div>
          <h3 className="card">👩‍👧 Maman Dev</h3>
          <p>Organisée, engagée et motivée comme jamais. #MomLife</p>
        </div>
      </div>
    </section>
  )
}