import './Certifications.css'

const certs = [
  {
    id: 'nptel',
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL – IIT Madras',
    icon: '🏛️',
    color: '#6495ed',
    description: 'National Programme on Technology Enhanced Learning — IIT Madras certified course on Python programming fundamentals and computational thinking.',
    verified: true,
  },
  {
    id: 'hackerrank',
    title: 'Python Programming',
    issuer: 'HackerRank',
    icon: '💚',
    color: '#34d399',
    description: 'Industry-recognized HackerRank certification demonstrating proficiency in Python programming, data structures, and problem-solving skills.',
    verified: true,
  },
  {
    id: 'forage-tata',
    title: 'Data Visualisation',
    issuer: 'Forage – Tata Group',
    icon: '📊',
    color: '#9b59f0',
    description: 'Virtual experience programme by Tata Group on Forage, covering advanced data visualization techniques and business analytics for decision-making.',
    verified: true,
  },
  {
    id: 'simplilearn-flutter',
    title: 'Introduction to Flutter',
    issuer: 'Simplilearn',
    icon: '📱',
    color: '#00e5ff',
    description: 'Fundamentals of Flutter cross-platform mobile app development using Dart, covering widget trees, state management, and UI design patterns.',
    verified: true,
  },
]

export default function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Certifications</div>
          <h2 className="section-title">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">Continuous learning through industry-recognized programs and institutions</p>
        </div>

        <div className="certs-grid">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="cert-card glass-card"
              id={`cert-${cert.id}`}
            >
              <div className="cert-header">
                <div className="cert-icon-wrap" style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                  <span>{cert.icon}</span>
                </div>
                {cert.verified && (
                  <div className="cert-verified" style={{ color: cert.color, background: `${cert.color}12`, borderColor: `${cert.color}30` }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Verified
                  </div>
                )}
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-issuer" style={{ color: cert.color }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
                {cert.issuer}
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-footer" style={{ borderColor: `${cert.color}20` }}>
                <div className="cert-badge" style={{ background: `${cert.color}10`, color: cert.color }}>
                  🏆 Certificate of Completion
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
