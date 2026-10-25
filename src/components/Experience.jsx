import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react'
import './Experience.css'

const experiences = [
  {
    id: 'villagkart',
    role: 'Junior Software Engineer',
    company: 'VillagKart Private Limited',
    period: 'Oct 2026 – Present',
    location: 'Hyderabad, Telangana',
    department: 'Product & Technology Department',
    type: 'Full-Time',
    color: '#10b981',
    icon: <Briefcase size={20} />,
    bullets: [
      'Develop and maintain full-stack web application features as part of the Product & Technology team using React.js, Node.js, Express.js, and MongoDB.',
      'Design and integrate RESTful APIs, applying JWT-based authentication and role-based access control to build secure, scalable backend services.',
      'Collaborate with product and engineering teams to translate requirements into working features, with code reviews and Git/GitHub version control.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Git', 'GitHub'],
  },
  {
    id: 'villagkart-intern',
    role: 'AI Programmer Intern',
    company: 'VillagKart Private Limited',
    period: 'Mar 2026 – Sep 2026',
    location: 'Hyderabad, Telangana (On-site)',
    department: 'AI & Automation',
    type: 'Internship',
    color: '#6495ed',
    icon: <Briefcase size={20} />,
    bullets: [
      'Built AI chatbots using Sarvam AI models (Sarvam, Bulbul, Anuska) for customer interaction and business automation.',
      'Integrated open-source Large Language Models (LLMs) via Ollama for local, on-premise AI inference, avoiding dependency on external LLM APIs.',
      'Built voice-enabled AI agents using NLP and speech processing for hands-free conversational interactions on web and mobile.',
      'Designed RESTful APIs and MERN Stack backend services (Node.js, Express.js, MongoDB, React.js) to connect AI features into ERP modules and business-automation applications.',
    ],
    tech: ['Python', 'Ollama', 'LLMs', 'NLP', 'Sarvam AI', 'AI Chatbots', 'REST APIs', 'Node.js', 'Express.js', 'React.js', 'MongoDB'],
  },
  {
    id: 'oasis',
    role: 'AICTE OIB-SIP Python Programming Internship',
    company: 'Oasis Infobyte',
    period: 'Nov 2024 – Jan 2025',
    location: 'Remote',
    department: 'AICTE OIB-SIP',
    type: 'Internship',
    color: '#f59e0b',
    icon: <Briefcase size={20} />,
    bullets: [
      'Completed Python projects covering data structures, file handling, and object-oriented programming (OOP).',
      'Developed modular Python scripts with clean architecture, error handling, and test-driven validation.',
      'Utilized Git and GitHub for collaborative version control, issue tracking, and code documentation.',
    ],
    tech: ['Python', 'Data Structures', 'OOP', 'File Handling', 'Algorithms', 'Git'],
  },
]

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Experience</div>
          <h2 className="section-title fade-in-up">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle fade-in-up">Building real-world AI solutions and scalable systems</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item" 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-connector">
                <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}>
                  {exp.icon}
                </div>
                <div className="timeline-line"></div>
              </div>

              <div className="experience-card glass-card">
                <div className="exp-header">
                  <div className="exp-header-left">
                    <div className="exp-type-badge" style={{ background: `${exp.color}15`, color: exp.color, borderColor: `${exp.color}40` }}>
                      {exp.type}
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <Building2 size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="exp-header-right">
                    <div className="exp-period">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="exp-location">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="exp-bullet">
                      <span className="bullet-dot" style={{ background: exp.color }}></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="exp-tech">
                  {exp.tech.map((t, i) => (
                    <span className="tech-tag" key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
