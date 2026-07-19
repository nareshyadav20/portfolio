import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Download, Send } from 'lucide-react'

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge fade-in-up">Contact</div>
          <h2 className="section-title fade-in-up">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle fade-in-up">Open for full-time roles, freelance projects, and collaborations.</p>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Get In Touch</h3>
            <p className="contact-intro">Whether you have a question or just want to say hi, my inbox is always open!</p>
            
            <div className="contact-links">
              <a href="mailto:panganareshyadav24@gmail.com" className="contact-link-item">
                <div className="contact-icon"><Mail size={18} /></div>
                <span>panganareshyadav24@gmail.com</span>
              </a>
              <a href="tel:+917569383323" className="contact-link-item">
                <div className="contact-icon"><Phone size={18} /></div>
                <span>+91 75693 83323</span>
              </a>
              <div className="contact-link-item">
                <div className="contact-icon"><MapPin size={18} /></div>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            <div className="contact-social-grid">
              <a href="https://linkedin.com/in/naresh-yadav-panga" target="_blank" rel="noreferrer" className="contact-social-btn">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/nareshyadav20" target="_blank" rel="noreferrer" className="contact-social-btn">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="resume-download-wrapper">
              <a href="https://docs.google.com/document/d/1P3p2vob5N3YZKAMxI67dW5CucgfgjV52/edit?usp=sharing&ouid=109640405793276953041&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn-primary ds-btn-full">
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Let's build something..."></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
