import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo" id="nav-logo">
          <span className="logo-text gradient-text">PN</span>
          <span className="logo-dot"></span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-menu">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={() => handleNavClick(link.href)}
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:panganareshyadav24@gmail.com"
              className="btn-primary nav-cta"
              id="nav-hire-btn"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to White Theme' : 'Switch to Dark Theme'}
          id="theme-toggle-btn"
          title={isDark ? 'Switch to White Theme' : 'Switch to Dark Theme'}
        >
          <span className={`theme-icon ${!isDark ? 'show' : ''}`}>🌙</span>
          <span className={`theme-icon ${isDark ? 'show' : ''}`}>☀️</span>
        </button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
