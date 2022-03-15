import React from "react"

export function PackageCards({ packages }) {
  return (
    <section className="packages-container">
      <h1>בחר את התוכנית שמתאימה לך</h1>
      <div className="line"></div>
      <section className="cards-container">
        {packages.map((pack, idx) => (
          <article className="card" key={idx}>
            <section className="title">
              <h1>{pack.title1}</h1>
              <h3>{pack.title2}</h3>
            </section>

            <p className="price">
              <span>החל מ</span>
              {pack.price} <span>ש״ח</span>
            </p>
            <p style={{ marginBottom: "10px" }} className="price-terms">
              {pack.priceTerms}
            </p>
            <div className="long-line"></div>
            <ul>
              {pack.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            <button>מעבר לרכישה</button>
          </article>
        ))}
      </section>
    </section>
  )
}
