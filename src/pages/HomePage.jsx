import React from "react"

import jsonData from "../data/data.json"
import homeImage from "../assets/images/home-img2-scaled.jpeg"
import { CardList } from "../cmps/CardList"
import { PackageCards } from "../cmps/PackageCards"
import ReviwesCards from "../cmps/ReviwesCards"

export function HomePage() {
  return (
    <section className="home-page flex-column container">
      <CardList cardsData={jsonData.cardsData[1]} />
      <CardList cardsData={jsonData.cardsData[2]} />
      <img src={homeImage} alt="" />
      <CardList cardsData={jsonData.cardsData[3]} />
      <PackageCards packages={jsonData.packages} />

      <section className="numbers-container">
        <h1>ניתן למספרים לדבר</h1>
        <div className="line"></div>
        <section className="numbers container">
          <div>
            <h2>25+</h2>
            <p>שנות פעילות וניסון בענף</p>
          </div>

          <div>
            <h2>50+</h2>
            <p>לקוחות פעילים</p>
          </div>

          <div>
            <h2>350+</h2>
            <p>שרתים ומחשבים מגובים</p>
          </div>

          <div>
            <h2>1350+</h2>
            <p>נפח איחסון פעיל (TB)</p>
          </div>
        </section>
      </section>

      <ReviwesCards reviews={jsonData.reviews}/>
    </section>
  )
}
