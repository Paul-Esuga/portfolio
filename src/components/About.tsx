import { useRef } from 'react'
import { about } from '../content/site'
import { stills } from '../content/stills'
import { useParallax } from '../hooks/useParallax'

export default function About() {
  const layer = useRef<HTMLImageElement>(null)
  useParallax(layer, 0.1)
  return (
    <section id="about" className="about section">
      <div className="grid about-grid">
        <div className="about-img">
          <img ref={layer} className="plx" src={stills.tdkr} alt={about.alt} loading="lazy" decoding="async" />
        </div>
        <div className="about-text">
          <h2>{about.heading}</h2>
          {about.paragraphs.map((p, i) => <p key={i} className={i === 0 ? 'lead' : undefined}>{p}</p>)}
          <ul className="focus" aria-label="Areas of focus">{about.focus.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
