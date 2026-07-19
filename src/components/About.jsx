import { motion } from 'framer-motion'
import { Code2, Server, Database, Cloud } from 'lucide-react'
import './About.css'

export default function About() {
  const highlights = [
    { icon: <Code2 size={24} color="var(--accent-blue)" />, title: 'Frontend', desc: 'React, Next.js, TypeScript' },
    { icon: <Server size={24} color="var(--accent-purple)" />, title: 'Backend', desc: 'Node.js, Express, Socket.io' },
    { icon: <Database size={24} color="var(--accent-cyan)" />, title: 'Database', desc: 'MongoDB, PostgreSQL, Prisma' },
    { icon: <Cloud size={24} color="var(--accent-green)" />, title: 'Cloud & AI', desc: 'Vercel, AI Integrations' },
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
                I'm a <strong>Full Stack MERN Developer</strong> specializing in React, Node.js, Express, MongoDB, PostgreSQL, Prisma, and AI integrations. 
                I enjoy building scalable applications that solve real-world problems, with experience in SaaS architecture, role-based authentication, real-time systems, and cloud deployment.
              </p>
              <p className="about-text" style={{ marginTop: '16px' }}>
                My passion lies in architecting intelligent, high-performance systems. Currently seeking <strong>Software Engineer opportunities</strong> where I can contribute to impactful projects, solve complex engineering challenges, and continue growing as a developer.
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
