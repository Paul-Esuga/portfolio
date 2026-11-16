import { useRef, type CSSProperties } from 'react'
import { index, reel } from '../content/archive'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Archive() {
  const track = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const go = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' })
  return (
    <section id="archive" className="archive section">
      <div className="container">
        <header className="grid arch-head">
          <h2>Beyond the code</h2>
          <p className="lead">Films, shows, records and podcasts that shaped my taste. I think of them as influences, in the same way I think of the people whose work I read.</p>
        </header>
      </div>
      <div className="reel" ref={track} tabIndex={0} role="region" aria-label="Archive gallery. Scroll sideways to browse.">
        {reel.map((t) => (
          <figure className="tile" key={t.title} style={{ '--ar': t.ar } as CSSProperties}>
            <img src={t.img} alt={t.alt} loading="lazy" decoding="async" />
            <figcaption><h3>{t.title}</h3><p className="meta">{[t.kind, t.by].filter(Boolean).join(', ')}</p></figcaption>
          </figure>
        ))}
      </div>
      <div className="container">
        <div className="reel-ctl">
          <button type="button" onClick={() => go(-1)}>Previous</button>
          <button type="button" onClick={() => go(1)}>Next</button>
        </div>
        <div className="grid index">
          {index.map((g) => (
            <div key={g.category} className="index-col">
              <h3>{g.category}</h3>
              <ul>{g.items.map((it) => <li key={it.title}>{it.title}{it.by && <span className="meta">{it.by}</span>}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
