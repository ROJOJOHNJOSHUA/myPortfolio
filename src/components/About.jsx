import { useState } from 'react'
import { portfolio } from '../data/portfolio.js'

function About() {
  const [photoFailed, setPhotoFailed] = useState(!portfolio.profileImage)

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-layout">
        <div className="about-visual">
          <div className="about-portrait" aria-label={portfolio.profileImage && !photoFailed ? `${portfolio.name} portrait` : 'Portrait placeholder'}>
            {portfolio.profileImage && !photoFailed ? (
              <img src={portfolio.profileImage} alt={portfolio.name} onError={() => setPhotoFailed(true)} />
            ) : (
              <span>{portfolio.initials}</span>
            )}
          </div>
          <span className="about-stamp">B.S.<br />Information<br />Technology</span>
          {photoFailed && (
            <p className="about-photo-note">Add your photo at<br />public/images/jj.jpg</p>
          )}
        </div>
        <div className="about-copy">
          <p className="eyebrow">A bit about me</p>
          <h2 id="about-title">Hello, I&apos;m {portfolio.name.split(' ')[0]}<span className="heading-period">.</span></h2>
          <p className="about-lead">{portfolio.about}</p>
          <p className="about-body">
            I use Visual Studio Code in my workflow and enjoy shaping interfaces in Figma and creating
            graphics in Canva. I&apos;m continuing to grow my skills and looking forward to contributing
            to a professional web or design team.
          </p>
          <div className="about-signoff">
            <span className="signature">{portfolio.name}</span>
            <span>{portfolio.role}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
