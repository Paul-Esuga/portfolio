import { useRef } from 'react'
import { quote } from '../content/site'
import { stills } from '../content/stills'
import { useParallax } from '../hooks/useParallax'

export default function CraftBand() {
  const layer = useRef<HTMLDivElement>(null)
  useParallax(layer, 0.14)
  return (
    <section className="craft" aria-label="Statement">
      <div ref={layer} className="plx" role="img" aria-label="BoJack Horseman watching a sunset over the sea" style={{ backgroundImage: `url(${stills.bjSunset})` }} />
      <div className="craft-shade" aria-hidden="true" />
      <blockquote className="container">{quote}</blockquote>
    </section>
  )
}
