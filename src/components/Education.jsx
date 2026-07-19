import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react'
import './Education.css'

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'Machine Learning'
  ]

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Education</div>
          <h2 className="section-title fade-in-up">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="education-card-wrapper">
          <motion.div 
            className="edu-card glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="edu-card-inner">
              <div className="edu-left">
                <div className="edu-degree-badge">B.Tech</div>
                <div className="edu-icon-wrap">
                  <GraduationCap size={28} className="text-accent-blue" />
                </div>
              </div>

              <div className="edu-main">
                <div className="edu-type">Bachelor of Technology</div>
                <h3 className="edu-degree">Computer Science Engineering (Data Science)</h3>
                <div className="edu-institution">
                  <span className="mr-2">🏛️</span>
                  Vignan Institute of Technology and Science
                </div>

                <div className="edu-meta-row">
                  <div className="edu-meta-item">
                    <Calendar size={14} />
                    2022 – 2026
                  </div>
                  <div className="edu-meta-item">
                    <MapPin size={14} />
                    Hyderabad, Telangana
                  </div>
                  <div className="edu-status-badge">
                    <span className="status-dot"></span>
                    Graduating 2026
                  </div>
                </div>

                <div className="edu-coursework-section">
                  <div className="edu-coursework-header">
                    <BookOpen size={16} />
                    Relevant Coursework
                  </div>
                  <div className="edu-highlights">
                    {coursework.map((course, idx) => (
                      <div key={idx} className="edu-highlight-chip">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="edu-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
