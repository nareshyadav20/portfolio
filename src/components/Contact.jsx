import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  {
    id: 'phone',
    icon: '📞',
    label: 'Phone',
    value: '+91 7569383323',
    href: 'tel:+917569383323',
    color: '#34d399',
  },
  {
    id: 'email',
    icon: '✉️',
    label: 'Email',
    value: 'panganareshyadav24@gmail.com',
    href: 'mailto:panganareshyadav24@gmail.com',
    color: '#6495ed',
  },
  {
    id: 'location',
    icon: '📍',
    label: 'Location',
    value: 'Hyderabad, Telangana, India',
    href: 'https://maps.google.com/?q=Hyderabad,Telangana',
    color: '#f472b6',
  },
]

const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    handle: 'nareshyadav20',
    href: 'https://github.com/nareshyadav20',
    color: '#6495ed',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'naresh-yadav-',
    href: 'https://linkedin.com/in/naresh-yadav-/',
    color: '#0077b5',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    handle: 'naresh-yadav.lovable.app',
    href: 'https://naresh-yadav.lovable.app/',
    color: '#9b59f0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Compose mailto link
    const mailtoLink = `mailto:panganareshyadav24@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <section className="section contact-section" id="contact">
      {/* Background accent */}
      <div className="contact-orb"></div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">Contact</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm actively looking for new opportunities. Whether you have a question or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-text">
              I'm currently open to <strong>full-time roles</strong>, <strong>freelance projects</strong>, and <strong>collaboration</strong> in AI/ML, Python, or MERN Stack development.
            </p>

            <div className="contact-cards">
              {contactInfo.map(info => (
                <a
                  key={info.id}
                  href={info.href}
                  target={info.id === 'location' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-info-card glass-card"
                  id={`contact-${info.id}`}
                >
                  <div className="contact-info-icon" style={{ background: `${info.color}15`, color: info.color }}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="contact-info-label">{info.label}</div>
                    <div className="contact-info-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              <div className="contact-socials-title">Find me on</div>
              <div className="contact-social-links">
                {socialLinks.map(social => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-card glass-card"
                    id={`contact-social-${social.id}`}
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-card-icon" style={{ color: social.color }}>
                      {social.icon}
                    </div>
                    <div>
                      <div className="social-card-name">{social.name}</div>
                      <div className="social-card-handle">@{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card glass-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">🎉</div>
                  <h3>Message Sent!</h3>
                  <p>Your email client should have opened. I'll get back to you as soon as possible!</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)} id="contact-send-another">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                  <h3 className="form-title">Send a Message</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Collaboration / Hello!"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className="form-input form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`btn-primary form-submit ${sending ? 'sending' : ''}`}
                    id="contact-submit"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <span className="btn-spinner"></span>
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
