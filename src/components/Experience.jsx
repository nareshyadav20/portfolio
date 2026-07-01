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
    icon: '🤖',
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
]

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Experience</div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">Building real-world AI solutions and scalable systems</p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id} id={`exp-${exp.id}`}>
              <div className="timeline-connector">
                <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}>
                  <span>{exp.icon}</span>
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
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                      {exp.company}
                    </div>
                  </div>
                  <div className="exp-header-right">
                    <div className="exp-period">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                      {exp.period}
                    </div>
                    <div className="exp-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
