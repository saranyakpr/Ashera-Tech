const navLinks = [
  { href: '#ai', label: 'AI Capabilities' },
  { href: '#services', label: 'Services' },
  { href: '#transform', label: 'Transformation' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = ({ isScrolled }) => {
  return (
    <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
      <a href="#hero" className="logo">
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
    </nav>
  )
}

export default Navbar
