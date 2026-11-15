import { useReveal } from '../hooks/useReveal';
import { useParallax } from '../hooks/useParallax';
import tdkr from '../assets/stills/tdkr.webp';
import site from '../content/site';
export default function About() { const text=useReveal<HTMLDivElement>(); const image=useParallax<HTMLDivElement>(); return <section id="about" className="about"><div className="pic" role="img" aria-label={site.aboutImageAlt}><div ref={image} className="photo" style={{backgroundImage:`url(${tdkr})`}}/></div><div className="txt rv" ref={text}><span className="eyebrow">{site.aboutEyebrow}</span>{site.aboutParagraphs.map(p=><p key={p}>{p}</p>)}<div className="focus">{site.focus.map(x=><span key={x}>{x}</span>)}</div></div></section>; }
