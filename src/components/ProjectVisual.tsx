import type { Project } from '../content/projects'

export default function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  if (kind === 'pred') return (
    <div className="pv pv-pred" aria-hidden="true">
      <p className="meta">Illustrative concept</p>
      <p className="pv-big">62%</p>
      <div><p><span>Team Alpha wins</span><span>62</span></p><p><span>Team Beta wins</span><span>38</span></p></div>
    </div>)
  if (kind === 'sec') return (
    <div className="pv pv-sec" aria-hidden="true">
      <p className="meta">Illustrative, not client data</p>
      <div className="sev">
        {[['Critical', 22, 'c'], ['High', 44, 'h'], ['Medium', 66, 'm'], ['Low', 30, 'l']].map(([n, w, k]) => (
          <div key={n as string} data-k={k}><span>{n}</span><b style={{ width: `${w}%` }} /></div>))}
      </div>
      <p className="flow"><span>Scope</span><span>Discover</span><span>Validate</span><span>Rate</span><span>Report</span></p>
    </div>)
  if (kind === 'bot') return (
    <div className="pv pv-bot" aria-hidden="true">
      <p className="meta">Interface representation</p>
      <p className="bubble bubble--u">Can you recommend something for sensitive skin?</p>
      <p className="bubble">Here are a few options from the catalogue.</p>
    </div>)
  return (
    <div className="pv pv-tab" aria-hidden="true">
      <p className="meta">Illustrative data</p>
      <table><thead><tr><th>Student</th><th>Class</th><th>Teacher</th></tr></thead>
        <tbody><tr><td>Student 001</td><td>Class A</td><td>Teacher 1</td></tr><tr><td>Student 002</td><td>Class A</td><td>Teacher 1</td></tr><tr><td>Student 003</td><td>Class B</td><td>Teacher 2</td></tr></tbody></table>
    </div>)
}
