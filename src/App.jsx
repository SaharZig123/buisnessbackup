import { HashRouter, Route, Router, Routes } from "react-router-dom"
import "./assets/scss/global.scss"
import AppFooter from "./cmps/AppFooter"
import { AppHeader } from "./cmps/AppHeader"
import About from "./pages/About"
import { Contact } from "./pages/Contact"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </section>
        <footer>
          <AppFooter />
        </footer>
      </div>
    </HashRouter>
  )
}
export default App
