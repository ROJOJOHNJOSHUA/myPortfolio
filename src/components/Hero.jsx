import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowDown, ArrowUpRight, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)
  const [resumeState, setResumeState] = useState('closed')
  const landingImage = portfolio.landingImage

  useEffect(() => {
    if (resumeState === 'closed') return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setResumeState('closing')
    }
    document.documentElement.style.setProperty('--resume-width', '42vw')
    document.documentElement.style.setProperty('--resume-width', '42vw')
    document.documentElement.classList.add('resume-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.classList.remove('resume-open')
      document.documentElement.style.removeProperty('--resume-width')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [resumeState])

  return (
    <>
      <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">IT graduate · Web developer · Designer</p>
          <h1 id="hero-title">
            Websites built with <span>purpose.</span>
            <br />
            Design made to <span>connect.</span>
          </h1>
          <p className="hero-intro">{portfolio.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <button className="text-link resume-trigger" type="button" onClick={() => setResumeState('open')}>
              View Resume <ArrowUpRight size={15} aria-hidden="true" />
            </button>
          </div>
          <div className="hero-meta">
            <span>{portfolio.role}</span>
            <span className="meta-divider" aria-hidden="true" />
            <span>React · PHP · MySQL · Figma · Canva</span>
          </div>
        </div>
        <div className="hero-art" aria-label={landingImage && !photoFailed ? `${portfolio.name} portrait` : `${portfolio.initials} monogram placeholder`}>
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className={`art-card${landingImage ? ' has-photo' : ''}`}>
            {landingImage && !photoFailed ? (
              <img className="hero-profile-photo" src={landingImage} alt={portfolio.name} onError={() => setPhotoFailed(true)} />
            ) : (
              <>
                <span className="art-card-label">Add your professional photo</span>
                <span className="art-monogram">{portfolio.initials}</span>
                <span className="art-card-caption">public/images/jj.jpg</span>
              </>
            )}
          </div>
        </div>
      </section>
      {resumeState !== 'closed' && createPortal(
        <div className="resume-viewer" onClick={() => setResumeState('closing')}>
          <section
            className={`resume-panel${resumeState === 'closing' ? ' is-closing' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            onAnimationEnd={(event) => {
              if (event.animationName === 'resume-slide-out') setResumeState('closed')
            }}
          >
            <button
              className="resume-close"
              type="button"
              aria-label="Close resume"
              onClick={(event) => {
                event.stopPropagation()
                setResumeState('closing')
              }}
            >
              <X size={20} aria-hidden="true" />
            </button>
            <img
              className="resume-image"
              src="/images/resume.jpg"
              alt="Resume of John Joshua N. Rojo"
              onClick={(event) => event.stopPropagation()}
            />
          </section>
        </div>,
        document.body,
      )}
    </>
  )
}

export default Hero
