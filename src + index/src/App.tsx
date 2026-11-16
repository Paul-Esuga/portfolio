import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectPage from './pages/ProjectPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)
  useEffect(() => {
    // After a page change, move focus to <main> so keyboard and screen-reader users start at the new content.
    if (first.current) first.current = false
    else if (!hash) document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])
  useEffect(() => {
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'auto' }))
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <ScrollManager />
    <Nav />
    <main id="main" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>)
}
