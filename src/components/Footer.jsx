import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="#home">
          <img className="brand-avatar" src={portfolio.profileImage} alt="" />
          <span className="footer-brand-copy">
            <strong>{portfolio.name}</strong>
            <span>{portfolio.role}</span>
          </span>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="back-to-top" href="#home">
          Back to top <ArrowUp size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>Designed with intention, built with care.</p>
        <span>© {currentYear} {portfolio.name}. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
