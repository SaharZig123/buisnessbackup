
import { useState } from "react"
import { NavLink } from "react-router-dom"
import HeroVideo from "../assets/videos/video.mp4"
import jsonData from "../data/data.json"

export function AppHeader() {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <header className="main-headelr">
      <video autoPlay loop muted playsInline>
        <source src={HeroVideo} type="video/mp4"/>
      </video>
      <nav className={navbar ? "active-navbar" : ""}>
        <NavLink to="/">ראשי</NavLink>
        <NavLink to="/about">אודותינו</NavLink>
        <NavLink to="/contact">צור קשר</NavLink>
        <a href="https://granitcorp.com/">GranitCorp</a>
      </nav>
      <section className="hero">
        <h2>{jsonData.hero.title1}</h2>
        <h1>{jsonData.hero.title2}</h1>
        <div className="line"></div>
        <p>
        {jsonData.hero.peregraph}
        </p>
        <button>ספרו לי עוד</button>
      </section>
    </header>
  )
}
