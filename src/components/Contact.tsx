import { useRef } from 'react'
import { credit, site } from '../content/site'
import { stills } from '../content/stills'
import { useParallax } from '../hooks/useParallax'
import TextLift from './TextLift'

export default function Contact() {
  const layer = useRef<HTMLImageElement>(null)
  useParallax(layer, 0.1)
  return (
    <section id="contact" className="contact">
      <img ref={layer} className="plx" src={stills.ent} alt="An animated couple talking across a diner table, from Entergalactic" loading="lazy" decoding="async" />
      <div className="contact-shade" aria-hidden="true" />
      <div className="container contact-in">
        <h2><a className="lift-host cta" href={`mailto:${site.email}`}><TextLift>Say hello</TextLift></a></h2>
        <div className="grid credits">
          <p><span className="meta">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></p>
          {(site.linkedin || site.github) && (
            <p><span className="meta">Elsewhere</span>
              {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              {site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>}</p>)}
          <p><span className="meta">Written, designed and built by</span>{site.name}</p>
        </div>
        <p className="meta fine">{credit}</p>
      </div>
    </section>
  )
}
