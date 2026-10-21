import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const sectionIds = ['home', 'work', 'about', 'skills', 'design', 'contact']

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  ...(portfolio.resumeUrl ? [{ href: portfolio.resumeUrl, label: 'Resume', external: true }] : []),
]

function Navbar() {
  const [activeSection, setActiveSection] = useState(null)
  const pendingSection = useRef(null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    function updateActiveSection() {
      const activePoint = 110
      if (pendingSection.current) {
        const target = sections.find((section) => section.id === pendingSection.current)
        if (target && target.getBoundingClientRect().top > activePoint) {
          setActiveSection(pendingSection.current)
          return
        }
        pendingSection.current = null
      }

      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect()
        return bounds.top <= activePoint && bounds.bottom > activePoint
      })
      const previousSection = [...sections]
        .filter((section) => section.getBoundingClientRect().top <= activePoint)
        .at(-1)

      setActiveSection((currentSection ?? previousSection)?.id ?? null)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    window.addEventListener('hashchange', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${portfolio.name}, home`}>
        <img className="brand-avatar" src={portfolio.profileImage} alt="" />
        <span>{portfolio.name}</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a
            className={activeSection === link.href.slice(1) ? 'is-active' : undefined}
            key={link.href}
            href={link.href}
            onClick={() => {
              if (!link.external) {
                pendingSection.current = link.href.slice(1)
                setActiveSection(link.href.slice(1))
              }
            }}
            aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className={`nav-contact${activeSection === 'contact' ? ' is-active' : ''}`}
        href="#contact"
        onClick={() => {
          pendingSection.current = 'contact'
          setActiveSection('contact')
        }}
        aria-current={activeSection === 'contact' ? 'location' : undefined}
      >
        Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
      </a>
    </header>
  )
}

export default Navbar
