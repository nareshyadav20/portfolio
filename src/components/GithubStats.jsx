import { motion } from 'framer-motion'
import { ExternalLink, GitCommit, Star, GitPullRequest, GitFork } from 'lucide-react'
import './GithubStats.css'

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

export default function GithubStats() {
  const username = "nareshyadav20"
  
  const languages = [
    { name: 'Python', percent: 45, color: '#3572A5' },
    { name: 'JavaScript', percent: 35, color: '#f1e05a' },
    { name: 'HTML/CSS', percent: 15, color: '#e34c26' },
    { name: 'Other', percent: 5, color: '#ededed' }
  ]

  const stats = [
    { label: 'Total Commits', value: '300+', icon: <GitCommit size={20} />, color: '#10b981' },
    { label: 'Repositories', value: '15+', icon: <GitFork size={20} />, color: '#6495ed' },
    { label: 'Contributions', value: 'Highest', icon: <GitPullRequest size={20} />, color: '#9b59f0' },
    { label: 'Stars Earned', value: '10+', icon: <Star size={20} />, color: '#f59e0b' }
  ]

  return (
    <section className="section github-section" id="github">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Open Source</div>
          <h2 className="section-title fade-in-up">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle fade-in-up">My contributions, top languages, and coding streak</p>
        </div>

        <div className="github-content">
          <div className="github-stats-grid">
            {/* Top Languages Card */}
            <motion.div 
              className="github-card glass-card top-langs-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Top Languages</h3>
              <div className="lang-progress-bar">
                {languages.map((lang, i) => (
                  <div key={i} className="lang-segment" style={{ width: `${lang.percent}%`, backgroundColor: lang.color }} title={lang.name}></div>
                ))}
              </div>
              <ul className="lang-legend">
                {languages.map((lang, i) => (
                  <li key={i}>
                    <span className="lang-dot" style={{ backgroundColor: lang.color }}></span>
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-pct">{lang.percent}%</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* GitHub Stats Card */}
            <motion.div 
              className="github-card glass-card stats-overview-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>GitHub Stats</h3>
              <div className="stats-overview-grid">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-overview-item">
                    <div className="stat-icon-wrapper" style={{ color: stat.color, background: `${stat.color}15` }}>
                      {stat.icon}
                    </div>
                    <div className="stat-info">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="github-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="btn-primary">
              <GithubIcon size={18} />
              Follow on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
