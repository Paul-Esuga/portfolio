import type { Project } from '../content/projects';
import site from '../content/site';
export default function ProjectVisual({ type, full = false }: { type: Project['visual']; full?: boolean }) { return <div className={`vis v-${type}${full?' full':''}`} role="img" aria-label={site.visualAlt}>
 {type==='pred' && <><small>{site.visual.illustrative}</small><div className="big">62%</div><div className="bars"><div><span>{site.visual.fixtureA}</span><span>62</span></div><div><span>{site.visual.fixtureB}</span><span>38</span></div></div></>}
 {type==='sec' && <><small className="cap">{site.visual.notClient}</small><div className="sev">{site.visual.severity.map(([n,w,v])=><div key={n}><span>{n}</span><b style={{width:w}}/><span>{v}</span></div>)}</div><div className="flow">{site.visual.workflow.map(x=><span key={x}>{x}</span>)}</div></>}
 {type==='bot' && <><span className="cap">{site.visual.interface}</span><p className="u">{site.visual.userPrompt}</p><p className="b">{site.visual.assistantReply}</p></>}
 {type==='tab' && <><small className="cap">{site.visual.sampleData}</small><table className="tab"><thead><tr><th>{site.visual.student}</th><th>{site.visual.class}</th><th>{site.visual.teacher}</th></tr></thead><tbody>{site.visual.students.map(row=><tr key={row[0]}>{row.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></>}
 </div>; }
