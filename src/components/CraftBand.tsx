import { useParallax } from '../hooks/useParallax';
import bj from '../assets/stills/bj.webp';
import { useReveal } from '../hooks/useReveal';
import site from '../content/site';
export default function CraftBand() { const photo=useParallax<HTMLDivElement>(.1); const quote=useReveal<HTMLQuoteElement>(); return <section className="band" aria-label={site.statementLabel}><div ref={photo} className="photo" style={{backgroundImage:`url(${bj})`}} aria-hidden="true"/><blockquote className="rv" ref={quote}>{site.craftLead} <em>{site.craftEmphasis}</em></blockquote></section>; }
