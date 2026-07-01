import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-glow"></div>
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" id="footer-logo">
              <span className="gradient-text">PN</span>
              <span className="footer-logo-dot"></span>
            </a>
            <p className="footer-tagline">
              AI/ML Developer · Python Expert · MERN Stack Engineer
            </p>
            <p className="footer-description">
              Building intelligent, scalable systems for real-world business automation.
              Based in Hyderabad, Telangana.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Navigation</h4>
            <ul>
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} id={`footer-nav-${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://github.com/nareshyadav20" target="_blank" rel="noreferrer" id="footer-github">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/naresh-yadav-/" target="_blank" rel="noreferrer" id="footer-linkedin">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://portfolio-swart-five-6qy38zwrqn.vercel.app/" target="_blank" rel="noreferrer" id="footer-old-portfolio">
                  Old Portfolio
                </a>
              </li>
              <li>
                <a href="mailto:panganareshyadav24@gmail.com" id="footer-email">
                  Email Me
                </a>
              </li>
              <li>
                <a href="tel:+917569383323" id="footer-phone">
                  Call Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} <span className="gradient-text">Panga Naresh</span>. All rights reserved.
          </p>
          <p className="footer-made">
            Crafted with ❤️ using <span className="gradient-text">React + Vite</span>
          </p>
          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            id="scroll-top-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
