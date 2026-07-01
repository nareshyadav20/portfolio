import { useState } from 'react'
import './Skills.css'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    color: '#6495ed',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 78 },
      { name: 'R', level: 60 },
    ],
  },
  {
    id: 'web',
    label: 'Web Tech',
    icon: '🌐',
    color: '#00e5ff',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    icon: '🤖',
    color: '#9b59f0',
    skills: [
      { name: 'LLMs & Ollama', level: 88 },
      { name: 'NLP', level: 82 },
      { name: 'Scikit-Learn', level: 80 },
      { name: 'TF-IDF / Word2Vec', level: 78 },
      { name: 'AI Chatbots', level: 90 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄️',
    color: '#34d399',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 78 },
      { name: 'PostgreSQL', level: 72 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🛠️',
    color: '#f472b6',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Jupyter Notebook', level: 88 },
      { name: 'Power BI', level: 70 },
      { name: 'Vercel', level: 80 },
      { name: 'Excel', level: 75 },
    ],
  },
]

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'LLMs', icon: '🧠' },
  { name: 'Ollama', icon: '🦙' },
  { name: 'NLP', icon: '📝' },
  { name: 'Express', icon: '🚀' },
  { name: 'Scikit-Learn', icon: '📊' },
  { name: 'Git', icon: '📦' },
  { name: 'Power BI', icon: '📈' },
  { name: 'Jupyter', icon: '📓' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages')
  const active = skillCategories.find(c => c.id === activeCategory)

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Skills</div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="skills-layout">
          {/* Category Tabs */}
          <div className="skill-tabs">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                className={`skill-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`skill-tab-${cat.id}`}
                style={activeCategory === cat.id ? { borderColor: cat.color, color: cat.color, background: `${cat.color}10` } : {}}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="skill-bars-container glass-card">
            <div className="skill-bars-header">
              <span className="skill-bars-icon">{active.icon}</span>
              <h3 className="skill-bars-title">{active.label}</h3>
            </div>
            <div className="skill-bars">
              {active.skills.map((skill, i) => (
                <div key={skill.name} className="skill-bar-item" id={`skill-${skill.name.toLowerCase().replace(/\s+/g,'-')}`}>
                  <div className="skill-bar-label">
                    <span>{skill.name}</span>
                    <span className="skill-bar-pct" style={{ color: active.color }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${active.color}, ${active.color}99)`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Full Tech Stack</h3>
          <div className="tech-stack-grid">
            {techStack.map((tech, i) => (
              <div className="tech-chip glass-card" key={i} id={`tech-${tech.name.toLowerCase().replace(/\s+/g,'-')}`}>
                <span className="tech-chip-icon">{tech.icon}</span>
                <span className="tech-chip-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
