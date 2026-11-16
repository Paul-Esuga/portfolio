import type { Cover } from '../content/projects'

/** Real screenshot sitting on a solid colour, or a fact set in large type. No mock-ups. */
export default function ProjectCover({ cover }: { cover: Cover }) {
  if (cover.type === 'shot') {
    return (
      <div className="pc pc--shot" data-tone={cover.tone}>
        <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" />
      </div>
    )
  }
  return (
    <div className="pc pc--facts" data-tone={cover.tone}>
      <p className="pc-big">{cover.big}</p>
      <div>
        <p className="pc-label">{cover.bigLabel}</p>
        <ul>{cover.lines.map((l) => <li key={l}>{l}</li>)}</ul>
      </div>
    </div>
  )
}
