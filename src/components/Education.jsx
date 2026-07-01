import './Education.css'

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Education</div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="education-card-wrapper">
          <div className="edu-card glass-card" id="edu-btech">
            <div className="edu-card-inner">
              <div className="edu-left">
                <div className="edu-degree-badge">B.Tech</div>
                <div className="edu-icon-wrap">
                  <span className="edu-icon">🎓</span>
                </div>
              </div>

              <div className="edu-main">
                <div className="edu-type">Bachelor of Technology</div>
                <h3 className="edu-degree">Computer Science & Data Science</h3>
                <div className="edu-institution">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                  Vignan Institute of Technology and Science, Hyderabad
                </div>

                <div className="edu-meta-row">
                  <div className="edu-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                    2022 – 2026
                  </div>
                  <div className="edu-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    Hyderabad, Telangana
                  </div>
                  <div className="edu-status-badge">
                    <span className="status-dot"></span>
                    Graduating 2026
                  </div>
                </div>

                <div className="edu-highlights">
                  <div className="edu-highlight-chip">
                    <span>🤖</span> AI & Machine Learning
                  </div>
                  <div className="edu-highlight-chip">
                    <span>📊</span> Data Science
                  </div>
                  <div className="edu-highlight-chip">
                    <span>💻</span> Full-Stack Development
                  </div>
                  <div className="edu-highlight-chip">
                    <span>🗃️</span> Database Systems
                  </div>
                  <div className="edu-highlight-chip">
                    <span>📐</span> Algorithms & DSA
                  </div>
                  <div className="edu-highlight-chip">
                    <span>🔐</span> Computer Networks
                  </div>
                </div>
              </div>
            </div>

            {/* Glow accent */}
            <div className="edu-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
