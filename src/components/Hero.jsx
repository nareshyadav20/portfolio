import { useState, useEffect } from 'react'
import './Hero.css'

const roles = [
  'AI/ML Developer',
  'Python Developer',
  'MERN Stack Developer',
  'Software Engineer',
  'LLM Integration Expert',
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = isDeleting ? 60 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, charIndex + 1))
        setCharIndex(c => c + 1)
        if (charIndex + 1 === role.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(role.substring(0, charIndex - 1))
        setCharIndex(c => c - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setCurrentRole(r => (r + 1) % roles.length)
        }
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentRole])

  return (
    <section className="hero section" id="hero">
      {/* Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="container hero-inner">
        {/* Left: Text */}
        <div className="hero-content">
          <div className="hero-badge fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="badge-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-name fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="gradient-text">Panga Naresh</span>
          </h1>

          <div className="hero-role fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="role-static">I'm a&nbsp;</span>
            <span className="role-dynamic">
              {displayText}
              <span className="cursor"></span>
            </span>
          </div>

          <p className="hero-description fade-in-up" style={{ animationDelay: '0.4s' }}>
            B.Tech CS & Data Science graduate (2026) building intelligent, scalable systems.
            Specializing in <strong>LLM integration</strong>, <strong>AI chatbots</strong>, and
            <strong> full-stack MERN</strong> applications for real-world business automation.
          </p>

          <div className="hero-contact-row fade-in-up" style={{ animationDelay: '0.45s' }}>
            <span className="contact-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              7569383323
            </span>
            <span className="contact-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Hyderabad, Telangana
            </span>
          </div>

          <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href="#projects" className="btn-primary" id="hero-view-work">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              View My Work
            </a>
            <a href="#contact" className="btn-outline" id="hero-contact">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="https://github.com/nareshyadav20" target="_blank" rel="noreferrer" className="social-link" id="hero-github">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/naresh-yadav-/" target="_blank" rel="noreferrer" className="social-link" id="hero-linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://portfolio-swart-five-6qy38zwrqn.vercel.app/" target="_blank" rel="noreferrer" className="social-link" id="hero-website">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-image-section fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="hero-image-container">
            <div className="image-ring image-ring-outer"></div>
            <div className="image-ring image-ring-inner"></div>
            <div className="hero-image-wrapper">
              <img
                src="/naresh.jpg"
                alt="Panga Naresh - AI/ML Developer"
                className="hero-photo"
                id="hero-photo"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hero-photo-fallback" style={{ display: 'none' }}>
                <span className="gradient-text" style={{ fontSize: '4rem', fontWeight: 800 }}>PN</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="float-badge float-badge-1">
              <span>🤖</span> AI/ML
            </div>
            <div className="float-badge float-badge-2">
              <span>⚡</span> MERN Stack
            </div>
            <div className="float-badge float-badge-3">
              <span>🐍</span> Python
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}
