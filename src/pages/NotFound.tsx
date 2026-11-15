import { Link } from 'react-router-dom';
import site from '../content/site';
export default function NotFound() { return <main className="not-found"><span className="eyebrow">{site.notFoundEyebrow}</span><h1>{site.notFoundTitle}</h1><Link className="more" to="/">{site.notFoundLink}</Link></main>; }
