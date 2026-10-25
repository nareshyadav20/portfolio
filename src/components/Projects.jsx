import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Activity, ArrowRight, User } from 'lucide-react'

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)
import './Projects.css'

const projects = [
  {
    id: 'familyhub',
    featured: true,
    title: 'FamilyHub OS',
    subtitle: 'Full Stack SaaS Family Management Platform',
    image: '/family_hub_os_dashboard_1784445041244.png',
    description: 'A secure, role-based multi-tenant SaaS platform designed to help families manage members, events, documents, groups, and communication in one centralized digital ecosystem.',
    problem: 'Families struggled managing multiple apps for events, sharing documents securely, and tracking shared expenses or communication.',
    solution: 'Built a centralized multi-tenant dashboard isolating family spaces with RBAC, realtime updates, and integrated Google calendar features.',
    features: [
      'Role-Based Access Control (Super Admin, Admin, Member)',
      'Multi-Tenant Architecture with family-wise data isolation',
      'Super Admin, Admin & Member Portals',
      'Google Calendar API & Real-time email notifications',
    ],
    tech: ['React.js', 'Vite', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Socket.IO'],
    architecture: 'Micro-services inspired REST API with containerized PostgreSQL and realtime websocket signaling.',
    myContribution: 'Designed and implemented the full-stack architecture, built Super Admin/Admin/Member portals, integrated Google Calendar, realtime emails, and deployed on Vercel and Render.',
    links: {
      live: 'https://family-hub-seven-ecru.vercel.app/',
      admin: 'https://family-hub-superadmin.vercel.app/',
      github: 'https://github.com/nareshyadav20/family_hub.git'
    },
    category: 'Full Stack',
    color: '#6495ed'
  },
  {
    id: 'livora',
    featured: false,
    title: 'Livora Hostel Hub',
    subtitle: 'Hostel Management System',
    image: '/livora_hostel_hub_1784445062409.png',
    description: 'A full-stack hostel management platform with Owner/Tenant portals, JWT-based role-based access control, and React.js/Node.js/Express.js REST APIs backed by MongoDB.',
    features: [
      'Owner & Tenant separate portals',
      'JWT-based role-based access control',
      'Booking, payments and occupancy workflows'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Vercel'],
    links: { 
      live: 'https://livora-hostel-hub-tenant.vercel.app/', 
      admin: 'https://livora-hostel-hub-admin.vercel.app/',
      github: 'https://github.com/nareshyadav20'
    },
    category: 'Full Stack',
    color: '#34d399'
  },
  {
    id: 'spam-detection',
    featured: false,
    title: 'Spam Review Detection',
    subtitle: 'Machine Learning / NLP Project',
    image: '/spam_detection_1784445083716.png',
    description: 'Built a machine learning model in Python to detect spam/fake e-commerce reviews using TF-IDF and Word2Vec feature extraction, text preprocessing, and accuracy evaluation.',
    features: [
      'TF-IDF & Word2Vec feature extraction',
      'Tokenization & stop-word removal preprocessing',
      'Accuracy and precision metrics evaluation'
    ],
    tech: ['Python', 'Scikit-Learn', 'NLP', 'SQL', 'Word2Vec', 'TF-IDF'],
    links: { live: '', github: 'https://github.com/nareshyadav20' },
    category: 'AI/ML',
    color: '#9b59f0'
  }
]

const categories = ['All', 'Full Stack', 'AI/ML', 'Web App']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const featured = filtered.filter(p => p.featured)
  const others = filtered.filter(p => !p.featured)

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Portfolio</div>
          <h2 className="section-title fade-in-up">
            Featured <span className="gradient-text">Engineering Work</span>
          </h2>
          <p className="section-subtitle fade-in-up">A showcase of real-world scalable applications, APIs, and ML models</p>
        </div>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {/* Featured Projects */}
          <div className="featured-projects">
            <AnimatePresence>
              {featured.map((project, i) => (
                <motion.div 
                  key={project.id}
                  className="featured-project-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="fp-image-container">
                    <div className="fp-overlay"></div>
                    <img src={project.image} alt={project.title} className="fp-image" />
                    <div className="fp-links">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="fp-icon-btn">
                          <Github size={24} />
                        </a>
                      )}
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="fp-icon-btn">
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="fp-content">
                    <div className="fp-badge" style={{ color: project.color, background: `${project.color}15`, borderColor: `${project.color}40` }}>
                      Featured Project
                    </div>
                    <h3 className="fp-title">{project.title}</h3>
                    <h4 className="fp-subtitle">{project.subtitle}</h4>
                    
                    <div className="fp-description-box">
                      <p>{project.description}</p>
                    </div>
                    
                    <div className="fp-details">
                      <div className="fp-detail-group">
                        <h5><Activity size={16} color="var(--accent-blue)" /> Key Features</h5>
                        <ul>
                          {project.features.map((f, idx) => <li key={idx}>- {f}</li>)}
                        </ul>
                      </div>
                      <div className="fp-detail-group">
                        <h5><User size={16} color="var(--accent-purple)" /> My Contribution</h5>
                        <p>{project.myContribution}</p>
                      </div>
                    </div>

                    <div className="fp-tech">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-pill">{t}</span>
                      ))}
                    </div>

                    <div className="fp-actions">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="btn-primary">
                          Main Portal <ArrowRight size={16} />
                        </a>
                      )}
                      {project.links.admin && (
                        <a href={project.links.admin} target="_blank" rel="noreferrer" className="btn-outline">
                          Super Admin Portal
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Other Projects Grid */}
          <div className="other-projects-grid">
            <AnimatePresence>
              {others.map((project, i) => (
                <motion.div 
                  key={project.id}
                  className="other-project-card glass-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="op-image-container">
                    <img src={project.image} alt={project.title} className="op-image" />
                    <div className="op-links">
                      {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer"><Github size={18} /></a>}
                      {project.links.live && <a href={project.links.live} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>}
                    </div>
                  </div>
                  <div className="op-content">
                    <h3>{project.title}</h3>
                    <p className="op-desc">{project.description}</p>
                    <div className="op-tech">
                      {project.tech.slice(0,4).map((t, idx) => (
                        <span key={idx} className="tech-pill-small">{t}</span>
                      ))}
                      {project.tech.length > 4 && <span className="tech-pill-small">+{project.tech.length - 4}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
