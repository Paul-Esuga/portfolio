import { Fragment, type CSSProperties } from 'react'
/** Per-character lift. Put `lift-host` on the link/button that contains it so hover and focus trigger it. */
export default function TextLift({ children }: { children: string }) {
  return (
    <span className="lift"><span className="visually-hidden">{children}</span><span aria-hidden="true">
      {children.split(' ').map((word, w, all) => (
        <Fragment key={w}><span className="lift-w" aria-hidden="true">
          {[...word].map((c, i) => (
            <span className="lift-c" key={i} style={{ '--n': i + w * 3 } as CSSProperties}><i>{c}</i><i>{c}</i></span>
          ))}
          </span>{w < all.length - 1 ? ' ' : null}</Fragment>
      ))}</span>
    </span>
  )
}
