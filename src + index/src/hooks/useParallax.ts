import { useEffect, type RefObject } from 'react'
import { useReducedMotion } from './useReducedMotion'
/** Moves `ref` vertically against scroll relative to its parent. Give the layer `inset: -12% 0` so it never shows gaps. */
export function useParallax(ref: RefObject<HTMLElement | null>, speed = 0.08) {
  const reduced = useReducedMotion()
  useEffect(() => {
    const el = ref.current, host = el?.parentElement
    if (!el || !host || reduced) return
    let raf = 0
    const run = () => {
      raf = 0
      const r = host.getBoundingClientRect()
      el.style.transform = `translate3d(0,${((r.top + r.height / 2 - window.innerHeight / 2) * -speed).toFixed(1)}px,0)`
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(run) }
    run()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf) }
  }, [ref, speed, reduced])
}
