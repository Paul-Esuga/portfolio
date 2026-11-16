import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="container section notfound">
      <h1>That page doesn’t exist.</h1>
      <p className="lead">The link may be old, or mistyped.</p>
      <Link className="btn" to="/">Back to the homepage</Link>
    </section>
  )
}
