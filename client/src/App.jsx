
import { ReactLenis, useLenis } from "lenis/react"

import Header from "./components/Header.jsx"
import Hero from "./components/sections/Hero.jsx"
import About from "./components/sections/About.jsx"
import Menu from "./components/sections/Menu.jsx"
import Reviews from "./components/sections/Reviews.jsx"
import Contact from "./components/sections/Contact.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {

  const lenis = useLenis()

  function handleAnchorClick(ev, selector) {
    ev.preventDefault()

    if (lenis) {
      lenis.scrollTo(selector, {
        offset: 0,
        duration: 1.2,
        immediate: false
      })
    }
  }

  return (
    <ReactLenis root options={{ autoRaf: true, lerp: 0.1 }}>
      <Header handleAnchorClick={handleAnchorClick} />
      <main className="overflow-x-hidden">
        <Hero handleAnchorClick={handleAnchorClick} />
        <About />
        <Menu />
        <Reviews />
        <Contact />
        <Footer handleAnchorClick={handleAnchorClick} />
      </main>
    </ReactLenis>
  )
}
