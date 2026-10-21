import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

function ContactIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.2 21v-8.1h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.5v3.1h2.6V21h3.1z" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="instagram-gradient" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#feda75" />
            <stop offset=".5" stopColor="#d62976" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" />
        <circle cx="17.6" cy="6.7" r="1.1" fill="#d62976" />
      </svg>
    )
  }

  if (type === 'gmail') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="gmail-gradient" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285f4" />
            <stop offset=".28" stopColor="#4285f4" />
            <stop offset=".5" stopColor="#ea4335" />
            <stop offset=".73" stopColor="#34a853" />
            <stop offset="1" stopColor="#34a853" />
          </linearGradient>
        </defs>
        <path d="M3 18V6l9 7 9-7v12" stroke="url(#gmail-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return <Phone size={20} strokeWidth={1.8} aria-hidden="true" />
}

function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Open to opportunities &amp; collaborations</p>
        <h2 id="contact-title">Let&apos;s make it<br />mean something<span className="contact-period">.</span></h2>
        <p>Have a project in mind? I&apos;d be glad to hear about it. Let&apos;s connect and explore how I can help.</p>
        {portfolio.email && (
          <a className="button button-light" href={`mailto:${portfolio.email}`}>
            <Mail size={16} aria-hidden="true" /> Say hello <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
        <div className="contact-methods" aria-label="Contact details">
          {portfolio.contacts.map((contact) => (
            <a
              className="contact-method"
              href={contact.href}
              key={contact.label}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noreferrer' : undefined}
            >
              <span className={`contact-method-icon contact-icon-${contact.icon}`}>
                <ContactIcon type={contact.icon} />
              </span>
              <span className="contact-method-copy">
                <span className="contact-method-label">{contact.label}</span>
                <span className="contact-method-value">{contact.value}</span>
              </span>
              {contact.external && <ArrowUpRight className="contact-method-arrow" size={14} aria-hidden="true" />}
            </a>
          ))}
        </div>
      </div>
      <div className="contact-decoration" aria-hidden="true">
        <span className="contact-sun" />
        <span className="contact-orbit contact-orbit-one" />
        <span className="contact-orbit contact-orbit-two" />
        <span className="contact-decoration-text">good things<br />start here ↗</span>
      </div>
    </section>
  )
}

export default Contact
