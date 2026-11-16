import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { index, reel } from '../content/archive'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Centred carousel: one frame fills most of the screen, the neighbours peek in from both sides.
 * Scroll-snap does the swiping. Scroll position drives a little depth: the frame in the middle is full size and
 * bright, the others sit back, and each picture drifts slightly inside its frame.
 */
export default function Archive() {
  const track = useRef<HTMLDivElement>(null)
  const wrap = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; left: number; moved: boolean; dx: number } | null>(null)
  const justDragged = useRef(false)
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)

  const slides = () => Array.from(track.current?.querySelectorAll<HTMLElement>('.slide') ?? [])

  /** Reads layout (not transforms) so scaling a slide never feeds back into the measurement. */
  const measure = useCallback(() => {
    const t = track.current
    if (!t) return 0
    const mid = t.scrollLeft + t.clientWidth / 2
    let best = 0, bestD = Infinity
    slides().forEach((el, i) => {
      const o = (el.offsetLeft + el.offsetWidth / 2 - mid) / el.offsetWidth
      el.style.setProperty('--o', o.toFixed(3))
      el.style.setProperty('--a', Math.min(1, Math.abs(o)).toFixed(3))
      if (Math.abs(o) < bestD) { bestD = Math.abs(o); best = i }
    })
    const max = t.scrollWidth - t.clientWidth
    wrap.current?.style.setProperty('--p', String(max > 0 ? t.scrollLeft / max : 0))
    return best
  }, [])

  useEffect(() => {
    const t = track.current
    if (!t) return
    let raf = 0
    const run = () => { raf = 0; setActive(measure()) }
    const on = () => { if (!raf) raf = requestAnimationFrame(run) }
    run()
    t.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { t.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf) }
  }, [measure])

  const goTo = (i: number) => {
    const t = track.current, el = slides()[Math.min(reel.length - 1, Math.max(0, i))]
    if (!t || !el) return
    t.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - t.clientWidth / 2, behavior: reduced ? 'auto' : 'smooth' })
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const to = e.key === 'ArrowRight' ? active + 1 : e.key === 'ArrowLeft' ? active - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? reel.length - 1 : null
    if (to === null) return
    e.preventDefault()
    goTo(to)
  }

  // Mouse drag. Touch already swipes natively, and snap pulls to the nearest frame on release.
  const onDown = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !track.current) return
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false, dx: 0 }
  }
  const onMove = (e: PointerEvent) => {
    const d = drag.current, t = track.current
    if (!d || !t) return
    const dx = e.clientX - d.x
    d.dx = dx
    if (!d.moved && Math.abs(dx) > 5) { d.moved = true; t.classList.add('is-drag'); t.setPointerCapture(e.pointerId) }
    if (d.moved) t.scrollLeft = d.left - dx
  }
  const onUp = () => {
    const d = drag.current, t = track.current
    drag.current = null
    if (!d?.moved || !t) return
    t.classList.remove('is-drag')
    justDragged.current = true
    setTimeout(() => { justDragged.current = false }, 0)
    // A drag of about a sixth of a frame is enough to move on, so it feels like a flick rather than a long haul.
    const w = slides()[0]?.offsetWidth ?? 600
    const base = measure()
    goTo(Math.abs(d.dx) > w / 6 && base === active ? active + (d.dx < 0 ? 1 : -1) : base)
  }

  return (
    <section id="archive" className="archive section">
      <div className="container">
        <header className="grid arch-head">
          <h2>Beyond the code</h2>
          <p className="lead">Films, shows, records and podcasts that shaped my taste. I think of them as influences, in the same way I think of the people whose work I read.</p>
        </header>
      </div>

      <div className="reel-wrap" ref={wrap}>
        <div className="reel" ref={track} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Archive gallery. Use the arrow keys or swipe to browse."
          onKeyDown={onKeyDown} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
          {reel.map((t, i) => (
            <div className={`slide${t.ar < 1.2 ? ' slide--cover' : ''}`} key={t.title} role="group" aria-roledescription="slide"
              aria-label={`${i + 1} of ${reel.length}: ${t.title}`} data-active={i === active ? '' : undefined}
              onClick={() => { if (!justDragged.current && i !== active) goTo(i) }}>
              <figure>
                <div className="slide-media">
                  <img src={t.img} alt={t.alt} loading={i < 2 ? "eager" : "lazy"} decoding="async" draggable={false} />
                </div>
                <figcaption><h3>{t.title}</h3><p className="meta">{[t.kind, t.by].filter(Boolean).join(', ')}</p></figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="container">
          <div className="reel-bar" aria-hidden="true"><i /></div>
          <div className="reel-ctl">
            <div>
              <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0}>Previous</button>
              <button type="button" onClick={() => goTo(active + 1)} disabled={active === reel.length - 1}>Next</button>
            </div>
            <p className="meta" aria-hidden="true">{active + 1} of {reel.length}</p>
          </div>
        </div>
      </div>

      <div className="container">
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
