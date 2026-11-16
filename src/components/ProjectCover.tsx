import type { Cover } from '../content/projects'

/** Images appear as they are, in a border with a hard offset shadow. Nothing sits behind them. */
export default function ProjectCover({ cover }: { cover: Cover }) {
  if (cover.type === 'shot') {
    return (
      <div className="pc pc--shot" data-accent={cover.accent}>
        <img src={cover.src} alt={cover.alt} loading="lazy" decoding="async" />
      </div>
    )
  }
  return (
    <div className="pc pc--stack" data-accent={cover.accent}>
      {cover.shots.map((s, i) => <img key={s.src} className={`s${i + 1}`} src={s.src} alt={s.alt} loading="lazy" decoding="async" />)}
    </div>
  )
}
