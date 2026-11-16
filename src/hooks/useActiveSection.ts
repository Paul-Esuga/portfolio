import { useEffect, useState } from 'react'
/** Returns the id of the last section whose top has passed 45% of the viewport. */
export function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')
  useEffect(() => {
    if (!enabled) { setActive(null); return }
    const on = () => {
      let cur: string | null = null
      for (const id of key.split(',')) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = id
      }
      setActive(cur)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [key, enabled])
  return active
}
