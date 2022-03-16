import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import HeroVideo from "../assets/videos/video.mp4"
import jsonData from "../data/data.json"

export function AppHeader() {
  const [navbar, setNavbar] = useState(false)
  const [hamburgerNav, setHamburgerNav] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const toggleHamburger = () => {
    setHamburgerNav(!hamburgerNav)
  }

  useEffect(() => {
    if (hamburgerNav) {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = "scroll"
  }, [hamburgerNav])

  window.addEventListener("scroll", changeBackground)

  return (
    <header className="main-header">
      <FontAwesomeIcon
        onClick={toggleHamburger}
        className="hamburger"
        color="white"
        icon={faBars}
      />
      <video autoPlay loop muted>
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <nav className={navbar ? "active-navbar" : "" || hamburgerNav ? "active-hamburger" : ""}>
        <FontAwesomeIcon
          onClick={toggleHamburger}
          className="close-icon"
          color="white"
          icon={faX}
        />
        <NavLink to="/">ראשי</NavLink>
        <NavLink to="/about">אודותינו</NavLink>
        <NavLink to="/contact">צור קשר</NavLink>
        <a href="https://granitcorp.com/">GranitCorp</a>
      </nav>
      <section className="hero">
        <h2>{jsonData.hero.title1}</h2>
        <h1>{jsonData.hero.title2}</h1>
        <div className="line"></div>
        <p>{jsonData.hero.peregraph}</p>
        <button>ספרו לי עוד</button>
      </section>
    </header>
  )
}

//
