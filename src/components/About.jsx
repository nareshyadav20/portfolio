import { motion } from 'framer-motion'
import { Code2, Server, Database, Cloud } from 'lucide-react'
import './About.css'

export default function About() {
  const highlights = [
    { icon: <Code2 size={24} color="var(--accent-blue)" />, title: 'Frontend', desc: 'React.js, JavaScript, Tailwind' },
    { icon: <Server size={24} color="var(--accent-purple)" />, title: 'Backend & Python', desc: 'Node.js, Express.js, Python, REST APIs' },
    { icon: <Database size={24} color="var(--accent-cyan)" />, title: 'Databases', desc: 'MongoDB, PostgreSQL, MySQL' },
    { icon: <Cloud size={24} color="var(--accent-green)" />, title: 'AI & Cloud', desc: 'Ollama LLMs, Sarvam AI, NLP, Vercel' },
  ]

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">About Me</div>
          <h2 className="section-title fade-in-up">Who I Am & <span className="gradient-text">What I Do</span></h2>
        </div>

        <div className="about-grid">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card about-text-card">
              <h3 className="about-subtitle">Professional Summary</h3>
              <p className="about-text">
                I'm a <strong>Junior Software Engineer at VillagKart Private Limited</strong> (Product & Technology) with a strong <strong>Full-Stack MERN</strong> foundation (React.js, Node.js, Express.js, MongoDB), <strong>Python development</strong> experience, and 6+ months of prior industry experience as an AI Programmer Intern.
              </p>
              <p className="about-text" style={{ marginTop: '16px' }}>
                Experienced in REST API design, JWT-based authentication, role-based access control, and deploying production full-stack apps. Passionate about AI application development including <strong>LLM integration (Ollama)</strong>, <strong>voice-enabled chatbots (Sarvam AI)</strong>, and <strong>NLP text classification</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card glass-card">
                  <div className="highlight-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="highlight-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
