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

export default function Hero() {
  const stats = [
    { label: 'Projects Built', value: '15+' },
    { label: 'GitHub Commits', value: '300+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Internships', value: '2+' },
    { label: 'Hours of Coding', value: '1000+' }
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
              Open to Full-Time Software Engineer Opportunities
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Naresh Yadav 👋</span>
            </h1>

            <div className="hero-role">
              Full Stack MERN Developer
            </div>

            <p className="hero-description">
              Building scalable web applications, AI-powered solutions, and SaaS products using React, Node.js, Express, MongoDB, PostgreSQL, Prisma, and modern cloud technologies.
            </p>

            <div className="hero-buttons">
              <a href="https://docs.google.com/document/d/1P3p2vob5N3YZKAMxI67dW5CucgfgjV52/edit?usp=sharing&ouid=109640405793276953041&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn-primary" id="hero-resume">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline" id="hero-contact">
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/nareshyadav20" target="_blank" rel="noreferrer" className="social-link" id="hero-github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/naresh-yadav-panga" target="_blank" rel="noreferrer" className="social-link" id="hero-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="https://portfolio-swart-five-6qy38zwrqn.vercel.app/" target="_blank" rel="noreferrer" className="social-link" id="hero-website">
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
                  alt="Naresh Yadav - Full Stack Developer"
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
                <span>⚛️</span> React.js
              </motion.div>
              <motion.div 
                className="float-badge float-badge-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span>⚡</span> Node.js
              </motion.div>
              <motion.div 
                className="float-badge float-badge-3"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span>🍃</span> MongoDB
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

