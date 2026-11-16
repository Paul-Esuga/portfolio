import { education, experience, toolbox } from '../content/experience'

export default function Experience() {
  return (
    <section id="experience" className="exp section">
      <div className="container grid exp-grid">
        <aside className="exp-side">
          <h2>Experience</h2>
          <p className="lead">Internships, two years in security, and a few things I volunteered for.</p>
          <div>
            <h3 className="exp-h">Education</h3>
            <p>{education.school}</p>
            <p className="meta">{education.degree}</p>
            <p className="meta">{education.detail}</p>
            <p className="meta">{education.cert}</p>
            {education.also.map((a) => <p className="meta" key={a}>{a}</p>)}
          </div>
          <div>
            <h3 className="exp-h">Toolbox</h3>
            {toolbox.map((t) => <p key={t.group}><span className="meta">{t.group}</span>{t.items}</p>)}
          </div>
        </aside>
        <ol className="exp-list">
          {experience.map((r) => (
            <li className="exp-row" key={r.org}>
              <p className="meta exp-when">{r.when}</p>
              <div>
                <h3>{r.org}</h3>
                <p className="exp-role">{r.role}</p>
                <ul>{r.facts.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
