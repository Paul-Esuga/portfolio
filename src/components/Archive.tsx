import { useState } from 'react';
import { archive } from '../content/archive';
import bb from '../assets/stills/bb.webp'; import bj from '../assets/stills/bj.webp'; import himym from '../assets/stills/himym.webp';
import { useReveal } from '../hooks/useReveal';
import site from '../content/site';
import TextLift from './TextLift';
const images:Record<string,string>={bb,bj,himym};
export default function Archive() { const [current,setCurrent]=useState(''); const intro=useReveal<HTMLDivElement>(); return <section id="archive"><div className="wrap arch"><div ref={intro} className="sticky rv"><span className="eyebrow">{site.archiveEyebrow}</span><h2>{site.archiveTitle.split(' ')[0]} <em>{site.archiveTitle.split(' ')[1]}</em></h2><p>{site.archiveIntro}</p><div className="peek" aria-hidden="true">{Object.entries(images).map(([key,src])=><i key={key} className={current===key?'on':''} style={{backgroundImage:`url(${src})`}}/>)}<span>{site.archiveStill}</span></div></div><div className="archive-list">{archive.map(group=><div className="cat rv" key={group.category}><span className="eyebrow">{group.category}</span>{group.items.map(item=><div className="row" key={item.title} aria-label={`${item.title}${item.artist?` — ${item.artist}`:''}`} tabIndex={0} onMouseEnter={()=>setCurrent(item.key||'')} onFocus={()=>setCurrent(item.key||'')} onMouseLeave={()=>setCurrent('')} onBlur={()=>setCurrent('')} onClick={()=>setCurrent(current===item.key?'':item.key||'')}><span><TextLift>{item.title}</TextLift></span><small>{item.artist||''}</small></div>)}</div>)}</div></div></section>; }
