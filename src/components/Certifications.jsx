import { motion } from 'framer-motion'
import { Award, CheckCircle, ExternalLink } from 'lucide-react'
import './Certifications.css'

const certs = [
  {
    id: 'nptel-python',
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL (IIT Madras)',
    icon: <Award size={24} />,
    color: '#34d399',
    description: 'Comprehensive Python programming course covering core concepts, algorithms, data structures, and computational thinking.',
    verified: true,
  },
  {
    id: 'hackerrank-python',
    title: 'Python Programming',
    issuer: 'HackerRank',
    icon: <Award size={24} />,
    color: '#6495ed',
    description: 'Certified in Python problem solving, object-oriented design, functional programming patterns, and algorithm implementation.',
    verified: true,
  },
  {
    id: 'forage-data-vis',
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Forage (Tata Group)',
    icon: <Award size={24} />,
    color: '#9b59f0',
    description: 'Practical business data visualization, executive communication, dashboard design, and translating complex data into insights.',
    verified: true,
  },
  {
    id: 'python-ibm',
    title: 'Python for Data Science & AI',
    issuer: 'IBM / Coursera',
    icon: <Award size={24} />,
    color: '#00e5ff',
    description: 'Advanced Python programming, data structures, Pandas/NumPy analysis, and foundational AI/ML methodologies.',
    verified: true,
  },
]

export default function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Certifications</div>
          <h2 className="section-title fade-in-up">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle fade-in-up">Continuous learning through industry-recognized programs and institutions</p>
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="cert-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="cert-header">
                <div className="cert-icon-wrap" style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30`, color: cert.color }}>
                  {cert.icon}
                </div>
                {cert.verified && (
                  <div className="cert-verified" style={{ color: cert.color, background: `${cert.color}12`, borderColor: `${cert.color}30` }}>
                    <CheckCircle size={14} />
                    Verified
                  </div>
                )}
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-issuer" style={{ color: cert.color }}>
                <Award size={14} className="mr-1" />
                {cert.issuer}
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-footer" style={{ borderColor: `${cert.color}20` }}>
                <div className="cert-badge" style={{ background: `${cert.color}10`, color: cert.color }}>
                  Certificate of Completion
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
