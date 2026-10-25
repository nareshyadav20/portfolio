import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Certifications from './components/Certifications'
import GithubStats from './components/GithubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-content">
          <div className="loader-ring">
            <div className="loader-ring-inner"></div>
          </div>
          <div className="loader-name">
            <span className="gradient-text">Naresh Yadav</span>
          </div>
          <div className="loader-tagline">Junior Software Engineer · Full-Stack & Python Developer · AI/ML</div>
        </div>
      </div>
    )
  }

  return (
    <div className="app noise-bg">
      <Helmet>
        <title>Panga Naresh | Junior Software Engineer | Full-Stack & Python Developer | AI/ML</title>
        <meta name="description" content="Portfolio of Panga Naresh — Junior Software Engineer at VillagKart Private Limited, Full-Stack MERN Developer, Python Developer, and AI/ML Specialist." />
        <meta name="keywords" content="Panga Naresh, Junior Software Engineer, VillagKart, Full Stack Developer, Python Developer, MERN Stack, React.js, Node.js, AI/ML, Portfolio" />
        <meta property="og:title" content="Panga Naresh | Junior Software Engineer & Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Panga Naresh — Junior Software Engineer at VillagKart Private Limited, Full-Stack MERN Developer, Python Developer, and AI/ML Specialist." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <html lang="en" />
      </Helmet>
      
      <ParticleBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Certifications />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
