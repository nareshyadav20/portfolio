import { motion } from 'framer-motion'
import { Monitor, Server, Database as DBIcon, Cloud, Brain, Wrench } from 'lucide-react'
import './Skills.css'

const categories = [
  {
    title: 'Programming & Python',
    icon: <Brain size={24} />,
    color: '#34d399',
    skills: ['Python', 'JavaScript', 'SQL', 'R', 'OOP', 'Data Structures']
  },
  {
    title: 'Full Stack & Backend',
    icon: <Server size={24} />,
    color: '#6495ed',
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.IO', 'Tailwind CSS']
  },
  {
    title: 'AI, ML & NLP',
    icon: <Monitor size={24} />,
    color: '#9b59f0',
    skills: ['Machine Learning', 'NLP', 'Scikit-Learn', 'Pandas', 'NumPy', 'TF-IDF', 'Word2Vec']
  },
  {
    title: 'Generative AI & LLMs',
    icon: <Cloud size={24} />,
    color: '#00e5ff',
    skills: ['LLMs', 'Ollama', 'AI Chatbots', 'Sarvam AI', 'Voice AI Agents', 'AI Automation']
  },
  {
    title: 'Databases',
    icon: <DBIcon size={24} />,
    color: '#f472b6',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma ORM']
  },
  {
    title: 'Tools & Analytics',
    icon: <Wrench size={24} />,
    color: '#f59e0b',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter Notebook', 'Vercel', 'Power BI']
  }
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Skills</div>
          <h2 className="section-title fade-in-up">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle fade-in-up">Comprehensive toolset for building scalable, end-to-end applications and AI integrations.</p>
        </div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="skill-category-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-category-header">
                <div 
                  className="skill-category-icon" 
                  style={{ color: category.color, background: `${category.color}15`, borderColor: `${category.color}30` }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
