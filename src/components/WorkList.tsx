import { Link } from 'react-router-dom'
import { projects } from '../content/projects'
import ProjectVisual from './ProjectVisual'
import TextLift from './TextLift'

export default function WorkList() {
  return (
    <section id="work" className="work section">
      <div className="container">
        <header className="grid work-head">
          <h2>Selected work</h2>
          <p className="lead">A demo-day product, client security work, an AI proof of concept and a group build. Confidential details stay confidential.</p>
        </header>
        <ol className="projects">
          {projects.map((p, i) => (
            <li key={p.slug} className={`proj grid${i % 2 ? ' proj--flip' : ''}`}>
              <Link to={`/work/${p.slug}`} className="proj-vis" aria-label={`${p.title}, case study`}><ProjectVisual kind={p.visual} /></Link>
              <div className="proj-info">
                <p className="meta">{p.status}</p>
                <h3><Link to={`/work/${p.slug}`} className="lift-host"><TextLift>{p.title}</TextLift></Link></h3>
                <p>{p.summary}</p>
                <p className="meta">{p.stack.join(', ')}</p>
                <Link to={`/work/${p.slug}`} className="btn">Read the case study</Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
