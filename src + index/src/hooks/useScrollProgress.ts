import { useEffect, type RefObject } from 'react'
/** Calls `onProgress(0..1)` as the tall `ref` section scrolls through its sticky track. */
export function useScrollProgress(ref: RefObject<HTMLElement | null>, onProgress: (p: number) => void, enabled = true) {
  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    let raf = 0
    const run = () => {
      raf = 0
      const span = el.offsetHeight - window.innerHeight
      onProgress(span > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span)) : 0)
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(run) }
    run()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf) }
  }, [ref, onProgress, enabled])
}
