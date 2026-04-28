import { useEffect, useState } from 'react'
import './App.css'
import AICapabilities from './components/AICapabilities.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import TechStrip from './components/TechStrip.jsx'
import Transformation from './components/Transformation.jsx'

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <TechStrip />
      <AICapabilities />
      <Services />
      <Transformation />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
