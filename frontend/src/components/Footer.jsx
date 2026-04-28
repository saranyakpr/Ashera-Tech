const footerLinks = [
  { href: '#ai', label: 'AI Capabilities' },
  { href: '#services', label: 'Services' },
  { href: '#transform', label: 'Transformation' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
]

const socialLinks = [
  { href: '#', iconClass: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: '#', iconClass: 'fab fa-x-twitter', label: 'X' },
  { href: '#', iconClass: 'fab fa-github', label: 'GitHub' },
  { href: '#', iconClass: 'fab fa-youtube', label: 'YouTube' },
]

const Footer = () => {
  return (
    <footer>
      <div className="foot-top">
        <a href="#hero" className="logo">
          <div className="logo-mark">A</div>
          <span className="logo-text">
            Ashera<em>Tech</em>
          </span>
        </a>

        <ul className="flinks">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="fsocs">
          {socialLinks.map((link) => (
            <a href={link.href} className="fsoc" key={link.label} aria-label={link.label}>
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="foot-btm">
        <p>&copy; 2026 Ashera Tech Ltd. All rights reserved.</p>
        <div className="ms-badge">
          <i className="fab fa-microsoft"></i> Microsoft Gold Partner
        </div>
      </div>
    </footer>
  )
}

export default Footer
