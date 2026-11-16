import { useRef } from 'react'
import { quote } from '../content/site'
import { stills } from '../content/stills'
import { useParallax } from '../hooks/useParallax'

export default function CraftBand() {
  const layer = useRef<HTMLImageElement>(null)
  useParallax(layer, 0.14)
  return (
    <section className="craft" aria-label="Statement">
      <img ref={layer} className="plx" src={stills.bjSunset} alt="BoJack Horseman watching a sunset over the sea" loading="lazy" decoding="async" />
      <div className="craft-shade" aria-hidden="true" />
      <blockquote className="container">{quote}</blockquote>
    </section>
  )
}
