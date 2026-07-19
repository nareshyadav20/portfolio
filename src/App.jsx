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
          <div className="loader-tagline">Full Stack MERN Developer</div>
        </div>
      </div>
    )
  }

  return (
    <div className="app noise-bg">
      <Helmet>
        <title>Naresh Yadav | Full Stack MERN Developer & AI Integration Specialist</title>
        <meta name="description" content="Portfolio of Naresh Yadav, a Full Stack MERN Developer specializing in scalable web apps, real-time architectures, AI solutions, and seamless user experiences." />
        <meta name="keywords" content="Naresh Yadav, Full Stack Developer, MERN Stack, React.js, Node.js, AI Integration, Web Development, Portfolio" />
        <meta property="og:title" content="Naresh Yadav | Full Stack MERN Developer" />
        <meta property="og:description" content="Portfolio of Naresh Yadav, a Full Stack MERN Developer specializing in scalable web apps, real-time architectures, and AI solutions." />
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
