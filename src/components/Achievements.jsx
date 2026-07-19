import { motion } from 'framer-motion'
import { Trophy, Code, Briefcase, Rocket } from 'lucide-react'

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)
import './Achievements.css'

const achievements = [
  {
    id: 1,
    title: '200+ Coding Problems Solved',
    desc: 'Demonstrating strong theoretical and practical knowledge of algorithms, data structures.',
    icon: <Code size={24} />,
    color: '#6495ed'
  },
  {
    id: 2,
    title: '15+ Projects Completed',
    desc: 'Successfully delivered complex full-stack web applications and AI models.',
    icon: <Rocket size={24} />,
    color: '#9b59f0'
  },
  {
    id: 3,
    title: '2+ Internships',
    desc: 'Gained hands-on industry experience in software engineering and AI programming.',
    icon: <Briefcase size={24} />,
    color: '#34d399'
  },
  {
    id: 4,
    title: '300+ GitHub Contributions',
    desc: 'Active open-source contributor and consistent portfolio maintenance.',
    icon: <Github size={24} />,
    color: '#f59e0b'
  },
  {
    id: 5,
    title: 'State Gold Medal in Silambam',
    desc: 'Awarded state-level gold medal, showing dedication, discipline, and physical fitness.',
    icon: <Trophy size={24} />,
    color: '#ef4444'
  }
]

export default function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Impact & Awards</div>
          <h2 className="section-title fade-in-up">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <motion.div 
              className="achievement-card glass-card"
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="ach-icon-wrapper" style={{ color: ach.color, background: `${ach.color}15`, borderColor: `${ach.color}30` }}>
                {ach.icon}
              </div>
              <div className="ach-content">
                <h3>{ach.title}</h3>
                <p>{ach.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
