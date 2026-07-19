import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)
import './GithubStats.css'

export default function GithubStats() {
  const username = "nareshyadav20"

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
          <motion.div 
            className="github-stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Languages Card */}
            <div className="github-card glass-card">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&text_color=c9d1d9&title_color=58a6ff`} 
                alt="Top Languages" 
                className="github-stat-image"
              />
            </div>

            {/* GitHub Stats Card */}
            <div className="github-card glass-card">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&text_color=c9d1d9&title_color=58a6ff&icon_color=58a6ff`} 
                alt="GitHub Stats" 
                className="github-stat-image"
              />
            </div>
            
            {/* GitHub Streak Card */}
            <div className="github-card glass-card streak-card">
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff`} 
                alt="GitHub Streak" 
                className="github-stat-image"
              />
            </div>
          </motion.div>

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
