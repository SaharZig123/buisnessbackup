import React from "react"

export function CardList({ cardsData }) {
  return (
    <div className="cards-container flex-column">
      <h1>{cardsData.title}</h1>
      <div className="line"></div>
      <section className="cards">
        {cardsData.cards.map((card, idx) => (
          <article key={idx}>
            <img src={require(`../assets/images/cards-images/${card.imgURL}`)} alt="Logo" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
