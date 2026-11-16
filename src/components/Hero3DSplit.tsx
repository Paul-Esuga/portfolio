import { useCallback, useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { heroCards, site } from '../content/site'
import { stills } from '../content/stills'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useScrollProgress } from '../hooks/useScrollProgress'

const smooth = (x: number) => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t) }

/** One frame -> splits into three cards -> each flips to reveal its own text. All driven by scroll. */
export default function Hero3DSplit() {
  const root = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const onProgress = useCallback((p: number) => {
    const el = root.current
    if (!el) return
    el.style.setProperty('--intro', String(1 - smooth(p / 0.1)))
    el.style.setProperty('--e', String(smooth((p - 0.12) / 0.3)))
    el.querySelectorAll<HTMLElement>('.panel').forEach((panel, i) => {
      const f = smooth((p - (0.3 + i * 0.12)) / 0.3)
      panel.style.setProperty('--f', String(f))
      panel.toggleAttribute('data-flipped', f > 0.96)
    })
  }, [])
  useScrollProgress(root, onProgress, !reduced)

  /** A keyboard user can land on a card link before its card has flipped. Jump to the point where all three are open. */
  const revealCards = useCallback(() => {
    const el = root.current
    if (!el || reduced) return
    requestAnimationFrame(() => {
      const span = el.offsetHeight - window.innerHeight
      const top = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: top + span * 0.9, behavior: 'instant' })
    })
  }, [reduced])

  return (
    <section id="top" ref={root} className={`hero${reduced ? ' hero--static' : ''}`} aria-label="Introduction">
      <div className="stick">
        <div className="hero-intro">
          <h1>{site.name}</h1>
          <p>{site.intro}</p>
        </div>
        <div className="frame">
          {heroCards.map((c, i) => (
            <div className="panel" key={c.title} data-flipped={reduced ? '' : undefined}
              style={{ '--i': i, '--d': i - 1, '--m': i === 1 ? 1 : 0 } as CSSProperties}>
              <div className="face front" aria-hidden="true"><i style={{ backgroundImage: `url(${stills.bb})` }} /></div>
              <div className="face back" data-tone={c.tone}>
                <h2>{c.title}</h2>
                <p>{c.text}</p>
                <Link to={c.to} className="btn btn--ghost" onFocus={revealCards}>{c.cta}</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="shade" aria-hidden="true" />
        <p className="visually-hidden">{site.heroAlt}</p>
      </div>
    </section>
  )
}
