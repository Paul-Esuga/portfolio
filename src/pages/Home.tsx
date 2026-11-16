import { useEffect } from 'react'
import About from '../components/About'
import Archive from '../components/Archive'
import Contact from '../components/Contact'
import CraftBand from '../components/CraftBand'
import Hero3DSplit from '../components/Hero3DSplit'
import WorkList from '../components/WorkList'

export default function Home() {
  useEffect(() => { document.title = 'Paul Esuga | Software engineer' }, [])
  return (<>
    <Hero3DSplit /><About /><WorkList /><CraftBand /><Archive /><Contact />
  </>)
}
