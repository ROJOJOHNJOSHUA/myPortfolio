import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section className="section-wrap projects-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Development · UI/UX · Graphic design</p>
          <h2 id="work-title">Selected work<span className="heading-period">.</span></h2>
        </div>
        <p className="section-aside">
          Explore live websites and selected visual work.
        </p>
      </div>
      <div className="project-grid">
        {portfolio.projects.map((project) => (
          <article className={`project-card project-${project.tone}`} key={project.number}>
            <div className={`project-art${project.image ? ' project-art-with-image' : ''}`}>
              {project.image ? (
                <img
                  className={`project-art-image${project.imageFit === 'fill' ? ' project-art-image-fill' : ''}`}
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              ) : (
                <div aria-hidden="true">
                  <span className="project-art-ring" />
                  <span className="project-art-mark">{project.mark}</span>
                  <span className="project-art-caption">project preview</span>
                </div>
              )}
            </div>
            <div className="project-info">
              <div className="project-title-row">
                <div>
                  <h3>{project.title}</h3>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  View project <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : project.image ? (
                <button
                  className="project-link project-view-button"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                >
                  View project <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              ) : (
                <span className="project-link project-link-placeholder">
                  Add a project URL in portfolio.js
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
      {selectedProject && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} full-screen preview`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null)
          }}
        >
          <button
            className="project-lightbox-close"
            type="button"
            aria-label="Close full-screen preview"
            onClick={() => setSelectedProject(null)}
          >
            <X size={24} aria-hidden="true" />
          </button>
          <img src={selectedProject.image} alt={selectedProject.title} />
        </div>
      )}
    </section>
  )
}

export default Projects
