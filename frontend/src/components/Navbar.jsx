import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#ai', label: 'AI Capabilities' },
  { href: '#services', label: 'Services' },
  { href: '#transform', label: 'Transformation' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)

    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
      <a href="#hero" className="logo" onClick={closeMenu}>
        <div className="logo-mark">A</div>
        <span className="logo-text">
          Ashera<em>Tech</em>
        </span>
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-btn">
        Get Started
      </a>

      <button
        type="button"
        className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="mobile-nav-btn" onClick={closeMenu}>
          Book a Strategy Call
        </a>
      </div>
    </nav>
  )
}

export default Navbar
