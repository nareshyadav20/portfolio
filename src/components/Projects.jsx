import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 'livora',
    title: 'Livora Hostel Hub',
    subtitle: 'Full-Stack Hostel Management System',
    description: 'A comprehensive hostel management platform with separate Owner, Tenant, and Admin portals, featuring role-based access control, real-time occupancy tracking, and complete digitization of hostel workflows.',
    icon: '🏠',
    color: '#6495ed',
    gradient: 'linear-gradient(135deg, #6495ed22, #9b59f022)',
    links: [
      { label: 'Tenant Portal', href: 'https://livora-hostel-hub-tenant.vercel.app', icon: '🔗' },
      { label: 'Owner Portal', href: 'https://hostel-hub-owner.vercel.app', icon: '🔗' },
      { label: 'Admin Portal', href: 'https://livora-hostel-hub-admin.vercel.app/', icon: '🔗' },
    ],
    bullets: [
      'Built separate Owner, Tenant, and Admin portals with role-based access control (JWT Authentication)',
      'Implemented modules for building, floor, room, and bed management; tenant profile management',
      'Booking & occupancy tracking with real-time dashboard analytics',
      'Designed responsive React.js interfaces with secure Node.js/Express.js REST APIs',
      'Deployed on Vercel, digitizing manual hostel workflows and improving operational efficiency',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Vercel'],
    category: 'Full Stack',
  },
  {
    id: 'spam-detection',
    title: 'Spam Review Detection',
    subtitle: 'ML NLP Project',
    description: 'Machine learning model to detect fake and spam reviews from e-commerce platforms using advanced NLP feature extraction techniques.',
    icon: '🔍',
    color: '#9b59f0',
    gradient: 'linear-gradient(135deg, #9b59f022, #f472b622)',
    links: [],
    bullets: [
      'Built ML model to detect fake/spam reviews using TF-IDF and Word2Vec feature extraction',
      'Performed text preprocessing including tokenization and stop-word removal',
      'Evaluated model accuracy, precision, recall, and F1 metrics',
      'Compared multiple classifiers to identify optimal performance',
    ],
    tech: ['Python', 'Scikit-Learn', 'NLP', 'TF-IDF', 'Word2Vec', 'SQL'],
    category: 'AI/ML',
  },
  {
    id: 'bus-pass',
    title: 'Smart Bus Pass System',
    subtitle: 'Web Application',
    description: 'A full-stack web application to digitize the bus pass process, replacing physical cards with a secure digital solution and streamlining the entire pass lifecycle.',
    icon: '🚌',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #34d39922, #00e5ff22)',
    links: [],
    bullets: [
      'Developed full-stack web app to digitize the bus pass process',
      'Replaced physical cards with secure digital solution',
      'Implemented secure authentication and role management for students and administrators',
      'Streamlined the complete pass issuance and renewal workflow',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
    category: 'Web App',
  },
]

const categories = ['All', 'Full Stack', 'AI/ML', 'Web App']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Projects</div>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">A showcase of real-world applications across AI/ML, Full Stack, and Web Development</p>
        </div>

        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`project-card glass-card ${hovered === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              id={`project-${project.id}`}
              style={{ background: hovered === project.id ? project.gradient : undefined }}
            >
              <div className="project-top">
                <div className="project-icon" style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}>
                  <span>{project.icon}</span>
                </div>
                <div className="project-links">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      style={{ borderColor: `${project.color}40`, color: project.color }}
                      id={`project-${project.id}-link-${i}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-category-tag" style={{ color: project.color, background: `${project.color}12`, borderColor: `${project.color}30` }}>
                {project.category}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>

              <ul className="project-bullets">
                {project.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="bullet-arrow" style={{ color: project.color }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="project-tech-tag" style={{ borderColor: `${project.color}30`, color: project.color, background: `${project.color}08` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
