import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectCover from '../components/ProjectCover'
import TextLift from '../components/TextLift'
import { projects } from '../content/projects'
import NotFound from './NotFound'

function Body({ items }: { items: string[] }) {
  const list = items.filter((i) => i.startsWith('- '))
  const prose = items.filter((i) => !i.startsWith('- '))
  return (<>{prose.map((t, i) => <p key={i}>{t}</p>)}{list.length > 0 && <ul>{list.map((t) => <li key={t}>{t.slice(2)}</li>)}</ul>}</>)
}

export default function ProjectPage() {
  const { slug } = useParams()
  const i = projects.findIndex((p) => p.slug === slug)
  useEffect(() => { document.title = i < 0 ? 'Not found | Paul Esuga' : `${projects[i].title} | Paul Esuga` }, [i])
  if (i < 0) return <NotFound />
  const p = projects[i], next = projects[(i + 1) % projects.length]
  const gallery = (p.gallery ?? []).filter((g) => p.cover.type !== 'shot' || g.src !== p.cover.src)
  return (
    <article className="case">
      <header className="container case-head">
        <Link to="/#work" className="back-link">Back to all work</Link>
        <h1>{p.title}</h1>
        <dl className="case-meta">
          <div><dt className="meta">Status</dt><dd>{p.status}</dd></div>
          <div><dt className="meta">Role</dt><dd>{p.role}</dd></div>
          <div><dt className="meta">Stack</dt><dd>{p.stack.join(', ')}</dd></div>
        </dl>
      </header>
      <div className="container"><div className="case-vis"><ProjectCover cover={p.cover} /></div></div>
      {p.sections.filter((s) => s.body.length > 0).map((s) => (
        <section key={s.heading} className="container grid case-sec">
          <h2>{s.heading}</h2>
          <div className="case-body"><Body items={s.body} /></div>
        </section>
      ))}
      {gallery.length > 0 && (
        <section className="container case-gallery" aria-label="Screens and diagrams">
          {gallery.map((g) => (
            <figure key={g.src} className={g.wide ? 'is-wide' : undefined}>
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
              <figcaption className="meta">{g.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}
      <Link to={`/work/${next.slug}`} className="container next lift-host">
        <span className="meta">Next case study</span>
        <span className="next-title"><TextLift>{next.title}</TextLift></span>
      </Link>
    </article>
  )
}
