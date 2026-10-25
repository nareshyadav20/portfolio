import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ExternalLink } from 'lucide-react'
import './Hero.css'

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const roles = [
  'Junior Software Engineer',
  'Full-Stack (MERN) Developer',
  'Python Developer',
  'AI / ML Specialist',
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const fullText = roles[currentRoleIndex]
    const speed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1600)
        }
      } else {
        setDisplayText(fullText.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setCurrentRoleIndex(prev => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentRoleIndex])

  const stats = [
    { label: 'Current Role', value: 'VillagKart' },
    { label: 'Projects Built', value: '15+' },
    { label: 'GitHub Commits', value: '300+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Industry Experience', value: '3 Roles' }
  ]

  return (
    <section className="hero section" id="hero">
      {/* Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: Text */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-badge">
              <span className="badge-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
              Junior Software Engineer @ VillagKart | AI & MERN Specialist
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Naresh Yadav 👋</span>
            </h1>

            <div className="hero-role">
              <span className="gradient-text" style={{ minHeight: '1.4em', display: 'inline-block' }}>
                {displayText}
              </span>
              <span className="cursor" style={{ marginLeft: '4px', opacity: 0.8, color: 'var(--accent-blue)' }}>|</span>
            </div>

            <p className="hero-description">
              Junior Software Engineer at VillagKart Private Limited. Experienced in building scalable full-stack web applications, robust Python backend services, and AI-powered systems with React, Node.js, Express, MongoDB, and modern cloud technologies.
            </p>

            <div className="hero-buttons">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                download="Panga_Naresh_Resume.pdf" 
                className="btn-primary" 
                id="hero-resume"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline" id="hero-contact">
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/nareshyadav20" target="_blank" rel="noopener noreferrer" className="social-link" id="hero-github" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/naresh-yadav-/" target="_blank" rel="noopener noreferrer" className="social-link" id="hero-linkedin" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="https://portfolio-swart-five-6qy38zwrqn.vercel.app/" target="_blank" rel="noopener noreferrer" className="social-link" id="hero-website" aria-label="Portfolio Website">
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div 
            className="hero-image-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero-image-container">
              <div className="image-ring image-ring-outer"></div>
              <div className="image-ring image-ring-inner"></div>
              <div className="hero-image-wrapper">
                <img
                  src="/naresh.jpg"
                  alt="Naresh Yadav - Full Stack & Python Developer"
                  className="hero-photo"
                  id="hero-photo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hero-photo-fallback" style={{ display: 'none' }}>
                  <span className="gradient-text" style={{ fontSize: '4rem', fontWeight: 800 }}>NY</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div 
                className="float-badge float-badge-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>🐍</span> Python
              </motion.div>
              <motion.div 
                className="float-badge float-badge-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span>⚛️</span> MERN Stack
              </motion.div>
              <motion.div 
                className="float-badge float-badge-3"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span>🤖</span> AI / LLM
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass-card">
              <h3 className="stat-value gradient-text">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

