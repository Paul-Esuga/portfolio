import { useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '../content/site'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Nav() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const active = useActiveSection(nav.map((n) => n.id), onHome)
  const [hover, setHover] = useState<string | null>(null)
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const pill = useRef<HTMLSpanElement>(null)
  const current = hover ?? active

  useLayoutEffect(() => {
    const el = current ? refs.current[current] : null
    const p = pill.current
    if (!p) return
    if (!el) { p.style.opacity = '0'; return }
    p.style.opacity = '1'
    p.style.width = `${el.offsetWidth}px`
    p.style.transform = `translateX(${el.offsetLeft}px)`
  }, [current])

  return (
    <header className="bar">
      <Link className="mark" to="/" aria-label={`${site.name}, home`}><span className="mark-full">{site.name}</span><span className="mark-short" aria-hidden="true">PE</span></Link>
      <nav aria-label="Main" className="nav" onMouseLeave={() => setHover(null)}>
        <span className="pill" ref={pill} data-hover={hover ? '' : undefined} aria-hidden="true" />
        {nav.map((n) => (
          <Link key={n.id} to={`/#${n.id}`} ref={(el) => { refs.current[n.id] = el }}
            className={current === n.id ? 'on' : ''} aria-current={active === n.id ? 'true' : undefined}
            onMouseEnter={() => setHover(n.id)} onFocus={() => setHover(n.id)} onBlur={() => setHover(null)}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
