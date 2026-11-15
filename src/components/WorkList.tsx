import { Link } from 'react-router-dom';
import { projects } from '../content/projects';
import ProjectVisual from './ProjectVisual';
import { useReveal } from '../hooks/useReveal';
import site from '../content/site';
import TextLift from './TextLift';
function WorkItem({ index }: { index:number }) { const p=projects[index]; const ref=useReveal<HTMLElement>(); return <article ref={ref} className={`proj rv ${index===1?'r':''} ${index===2?'s':''}`}><Link className="vis-link" to={`/work/${p.slug}`} aria-label={`${p.title} — ${site.projectLinkLabel}`}><ProjectVisual type={p.visual}/></Link><div className="info"><span className="num">{p.number}</span><h3><Link to={`/work/${p.slug}`} aria-label={p.title}><TextLift>{p.title}</TextLift></Link></h3><p>{p.summary}</p><span className="status">{p.status}</span><div className="tech">{p.stack.join(' · ')}</div><Link className="more" to={`/work/${p.slug}`} aria-label={site.caseStudyLink}><TextLift>{site.caseStudyLink}</TextLift></Link></div></article>; }
export default function WorkList() { const head=useReveal<HTMLDivElement>(); return <section id="work"><div className="wrap"><div className="work-h rv" ref={head}><div><span className="eyebrow">{site.workEyebrow}</span><h2>{site.workTitle}<br/>{site.workTitleEnd.split(' ').slice(0,-2).join(' ')} <em>{site.workTitleEnd.split(' ').slice(-2).join(' ')}</em></h2></div><p>{site.workIntro}</p></div>{projects.map((p,i)=><WorkItem key={p.slug} index={i}/>)}</div></section>; }
