import { ArrowUpRight, Sparkles } from 'lucide-react'

const notes = [
  { number: '01', title: 'Less, but better', text: 'Make room for the details that matter.', className: 'note-primary' },
  { number: '02', title: 'Made to feel easy', text: 'A thoughtful experience feels natural.', className: 'note-soft' },
  { number: '03', title: 'Always in progress', text: 'Stay curious. Keep making things.', className: 'note-dark' },
]

function DesignShowcase() {
  return (
    <section className="showcase-section" id="design" aria-labelledby="showcase-title">
      <div className="section-wrap showcase-layout">
        <div className="showcase-copy">
          <p className="eyebrow">A small design philosophy</p>
          <h2 id="showcase-title">The little details make the big picture<span className="heading-period">.</span></h2>
          <p>Some visual notes on the way I like to approach digital work: with intention, warmth, and a little bit of play.</p>
          <a className="text-link" href="#contact">
            Let&apos;s make something <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <article className={`design-note ${note.className}`} key={note.number}>
              <span className="note-number">{note.number}</span>
              <Sparkles className="note-spark" size={25} strokeWidth={1.35} aria-hidden="true" />
              <div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignShowcase
