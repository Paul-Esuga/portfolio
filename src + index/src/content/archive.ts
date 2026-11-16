import { stills } from './stills'

export type Tile = { title: string; kind: string; by?: string; img: string; ar: number; alt: string }
// Order sets the rhythm of the reel: wide frames and square covers alternate on purpose.
export const reel: Tile[] = [
  { title: 'BoJack Horseman', kind: 'Television', img: stills.bjSunset, ar: 1.79, alt: 'BoJack watching a pink sunset over the sea.' },
  { title: 'CALL ME IF YOU GET LOST', kind: 'Music', by: 'Tyler, The Creator', img: stills.cmiyl, ar: 1, alt: 'Album art: a man in a pale blue cardigan carrying two suitcases.' },
  { title: 'Breaking Bad', kind: 'Television', img: stills.bb, ar: 1.78, alt: 'A white van below a red mesa at dusk.' },
  { title: 'Work of Art', kind: 'Music', by: 'Asake', img: stills.asake, ar: 1, alt: 'Album art: Asake in a pinstripe suit in front of paintings.' },
  { title: 'Oppenheimer', kind: 'Film', img: stills.opp, ar: 1.78, alt: 'Black-and-white portrait of a man in round glasses and a pinstripe suit.' },
  { title: 'Game of Thrones', kind: 'Television', img: stills.got, ar: 1.78, alt: 'A rider with a banner on a hill, a castle in the distance.' },
  { title: 'Laughing So Hard, It Hurts', kind: 'Music', by: 'MAVI', img: stills.mavi, ar: 1, alt: 'Album art: a two-faced bust on a plinth.' },
  { title: 'How I Met Your Mother', kind: 'Television', img: stills.umbrellas, ar: 1.81, alt: 'A rainy street full of yellow umbrellas.' },
  { title: 'Avengers: Infinity War', kind: 'Film', img: stills.thanos, ar: 2.39, alt: 'Thanos looking out at a sunset.' },
]

export type ArchiveGroup = { category: string; items: { title: string; by?: string }[] }
export const index: ArchiveGroup[] = [
  { category: 'Film', items: [{ title: 'That Awkward Moment' }, { title: 'Oppenheimer' }, { title: 'The Shawshank Redemption' }, { title: 'Avengers: Infinity War' }] },
  { category: 'Television', items: [{ title: 'BoJack Horseman' }, { title: 'How I Met Your Mother' }, { title: 'Fleabag' }, { title: 'Game of Thrones' }, { title: 'Breaking Bad' }, { title: 'Ben 10' }] },
  { category: 'Music', items: [{ title: 'CALL ME IF YOU GET LOST', by: 'Tyler, The Creator' }, { title: 'Work of Art', by: 'Asake' }, { title: 'Laughing So Hard, It Hurts', by: 'MAVI' }] },
  { category: 'Podcasts', items: [{ title: 'I Said What I Said' }, { title: 'What Now?', by: 'Trevor Noah' }] },
]
