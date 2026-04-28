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

    const observedElements = new WeakSet()

    const observeRevealElements = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

      elements.forEach((element) => {
        if (observedElements.has(element) || element.classList.contains('visible')) {
          return
        }

        observer.observe(element)
        observedElements.add(element)
      })
    }

    observeRevealElements()

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
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
