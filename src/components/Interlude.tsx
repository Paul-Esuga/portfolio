import { useRef } from 'react'
import { stills } from '../content/stills'
import { useParallax } from '../hooks/useParallax'

/** A short pause between the projects and the roles: two prints pinned to the page and one line of copy. */
export default function Interlude() {
  const a = useRef<HTMLDivElement>(null)
  const b = useRef<HTMLDivElement>(null)
  useParallax(a, 0.05)
  useParallax(b, -0.07)
  return (
    <section className="interlude" aria-label="Between projects and experience">
      <div className="container grid interlude-in">
        <div className="interlude-copy">
          <p className="interlude-line">Practice, then the real thing.</p>
          <p className="lead">Everything above is how I learn. What follows is where I have done it for other people.</p>
        </div>
        <div className="pin">
          <div className="pin-a" ref={a}>
            <figure className="print" data-accent="amber">
              <img src={stills.ted} alt="Ted Mosby sketching over architectural plans late at night." loading="lazy" decoding="async" />
              <figcaption>Ted Mosby, mid-draft.</figcaption>
            </figure>
          </div>
          <div className="pin-b" ref={b}>
            <figure className="print" data-accent="flame">
              <img src={stills.soup} alt="A bowl of green soup with alphabet noodles spelling GET A JOB." loading="lazy" decoding="async" />
              <figcaption>The soup had a point.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
