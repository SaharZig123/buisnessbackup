import React from "react"

export default function ReviwesCards({ reviews }) {
  return (
    <section className="review-container">
      <h1>מה לקוחות אומרים</h1>
      <div className="line"></div>
      <section className="cards-container">
        {reviews.map((review, idx) => (
          <article key={idx} className="card">
            <p className="review">{review.review}</p>
            <section className="reviewer-details">
              <img src={require(`../assets/images/avatars/${review.avatarURL}`)} alt="" />
              <section>
                <p className="name">{review.name}</p>
                <p className="role">{review.role}</p>
              </section>
            </section>
          </article>
        ))}
      </section>
    </section>
  )
}
