import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react'
import './Experience.css'

const experiences = [
  {
    id: 'reatchall',
    role: 'AI Programmer Intern',
    company: 'ReatchAll Private Limited',
    period: 'Mar 2026 – Present',
    location: 'Hyderabad, Telangana (On-site)',
    type: 'Internship',
    color: '#6495ed',
    icon: <Briefcase size={20} />,
    bullets: [
      'Developed AI-powered chatbot applications using Survam AI models (Survam, Bulbul, Anushka) for customer interaction and business automation.',
      'Integrated Large Language Models (LLMs) via Ollama for local AI inference, improving response accuracy and reducing latency.',
      'Built voice-enabled AI agents leveraging NLP and speech-processing techniques for hands-free user interactions.',
      'Designed and consumed RESTful APIs to integrate chatbot services with web and mobile applications.',
      'Developed and deployed AI automation solutions, ERP modules, and MERN Stack backend services.',
      'Collaborated cross-functionally to optimize chatbot conversation flows, deployment pipelines, and application scalability.',
    ],
    tech: ['Python', 'Ollama', 'LLMs', 'NLP', 'AI Chatbots', 'REST APIs', 'MongoDB', 'Node.js', 'Express.js', 'React.js'],
  },
  {
    id: 'oasis',
    role: 'Full Stack Development Intern',
    company: 'OASIS INFOBYTE (AICTE OIB-SIP)',
    period: 'Nov 2024 – Jan 2025',
    location: 'Remote',
    type: 'Internship',
    color: '#34d399',
    icon: <Briefcase size={20} />,
    bullets: [
      'Developed full-stack web applications focusing on responsive UI designs and robust backend APIs.',
      'Collaborated effectively in an agile environment to design, test, and deploy functional modules.',
      'Resolved bugs and optimized application performance, enhancing user experience across devices.',
      'Participated in code reviews and adopted best practices for version control using Git and GitHub.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
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
