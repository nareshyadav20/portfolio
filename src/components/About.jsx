import './About.css'

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '3+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '2026', label: 'Graduating' },
]

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">About Me</div>
          <h2 className="section-title">Passionate About Building <span className="gradient-text">Intelligent Systems</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-card glass-card">
              <div className="about-icon-row">
                <div className="about-icon-item">
                  <div className="about-icon" style={{ background: 'rgba(100, 149, 237, 0.15)' }}>🤖</div>
                  <span>AI/ML</span>
                </div>
                <div className="about-icon-item">
                  <div className="about-icon" style={{ background: 'rgba(155, 89, 240, 0.15)' }}>🐍</div>
                  <span>Python</span>
                </div>
                <div className="about-icon-item">
                  <div className="about-icon" style={{ background: 'rgba(0, 229, 255, 0.1)' }}>⚛️</div>
                  <span>React</span>
                </div>
                <div className="about-icon-item">
                  <div className="about-icon" style={{ background: 'rgba(52, 211, 153, 0.1)' }}>🌐</div>
                  <span>Node.js</span>
                </div>
              </div>

              <div className="about-highlight">
                <div className="highlight-icon">🎯</div>
                <div>
                  <h4>Currently at ReatchAll Pvt. Ltd.</h4>
                  <p>Building AI-powered chatbots & LLM-integrated systems</p>
                </div>
              </div>

              <div className="about-highlight">
                <div className="highlight-icon">🎓</div>
                <div>
                  <h4>B.Tech CS & Data Science — 2026</h4>
                  <p>Vignan Institute of Technology and Science, Hyderabad</p>
                </div>
              </div>

              <div className="about-highlight">
                <div className="highlight-icon">📍</div>
                <div>
                  <h4>Based in Hyderabad, Telangana</h4>
                  <p>Open to on-site, hybrid & remote opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <p className="about-text">
              I'm a <strong>B.Tech Computer Science & Data Science</strong> graduate (2026) with
              hands-on internship experience in AI/ML development, LLM integration, and full-stack
              MERN applications.
            </p>
            <p className="about-text">
              Currently working as an <strong>AI Programmer Intern at ReatchAll Private Limited</strong>,
              where I develop AI-powered chatbot applications using Survam AI models, integrate Large
              Language Models via Ollama, and build voice-enabled AI agents leveraging NLP and
              speech-processing techniques.
            </p>
            <p className="about-text">
              My passion lies in bridging the gap between cutting-edge AI research and practical
              business solutions. I love architecting intelligent, scalable systems that solve
              real-world problems — from <strong>ERP automation</strong> to <strong>hostel management platforms</strong>.
            </p>

            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div className="stat-card glass-card" key={i} id={`stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`}>
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="https://github.com/nareshyadav20"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                id="about-github"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View GitHub
              </a>
              <a
                href="https://linkedin.com/in/naresh-yadav-/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                id="about-linkedin"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
