import { Code2, PanelsTopLeft, Wrench } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const groups = [
  { name: 'Build', detail: 'Frontend, Backend and Database', icon: Code2 },
  { name: 'Design', detail: 'UI/UX & visual design', icon: PanelsTopLeft },
  { name: 'Tools', detail: 'My everyday workflow', icon: Wrench },
]

function Skills() {
  return (
    <section className="section-wrap skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">My toolkit</p>
          <h2 id="skills-title">Curious by nature<span className="heading-period">.</span></h2>
        </div>
        <p className="section-aside">
          A growing set of tools and skills I use to turn ideas into useful, engaging experiences.
        </p>
      </div>
      <div className="skills-content">
        {groups.map(({ name, detail, icon: Icon }, index) => (
          <article className="skill-card" key={name}>
            <div className="skill-card-heading">
              <span className="skill-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.8} /></span>
              <span className="skill-index">0{index + 1}</span>
            </div>
            <h3>{name}</h3>
            <p className="skill-detail">{detail}</p>
            <div className="skill-items">
              {portfolio.skills
                .filter((skill) => skill.group === name)
                .map((skill) => <span className="skill-pill" key={skill.name}>{skill.name}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
