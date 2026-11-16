export const site = {
  name: 'Paul Esuga',
  email: 'majiyeboesuga8@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mesuga',
  github: 'https://github.com/Paul-Esuga',
  location: 'Nigeria',
  intro: 'Software engineering, cybersecurity, and a long list of films I won’t shut up about.',
  heroAlt: 'A white van parked below a red mesa at dusk, from Breaking Bad.',
}

export type HeroCard = { title: string; text: string; cta: string; to: string; tone: 'ember' | 'lift' | 'chalk' }
export const heroCards: HeroCard[] = [
  { title: 'Software', text: 'Software Engineering student at Pan-Atlantic University. I build full-stack products and sweat the small details.', cta: 'See the work', to: '/#work', tone: 'ember' },
  { title: 'Security', text: 'CEH-certified. I run vulnerability assessments, write VAPT reports and document how to fix what I find.', cta: 'Read the case study', to: '/work/cybersecurity-vapt', tone: 'lift' },
  { title: 'Cinema', text: 'Films, television, albums and podcasts shape how I build. The archive is further down.', cta: 'Open the archive', to: '/#archive', tone: 'chalk' },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'archive', label: 'Archive' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  heading: 'I like problems that push back.',
  paragraphs: [
    'I’m Paul, a Software Engineering student at Pan-Atlantic University. Most of my time goes into building things and then trying to break them.',
    'I spent two years as a cybersecurity analyst running vulnerability assessments and penetration tests, and I’ve since interned in AI/ML and software development. AI, fintech and product thinking keep pulling me in.',
    'Away from the screen it’s films, television, albums and podcasts. I notice framing, pacing and the choices nobody asked for, and that habit follows me into code.',
  ],
  focus: ['Software engineering', 'AI and machine learning', 'Cybersecurity', 'Fintech', 'Product'],
  alt: 'A still from The Dark Knight Rises: Alfred at dusk.',
}

export const quote =
  'I’ve always admired people who care deeply about their craft. The intention behind a well-directed film, a carefully composed frame or a well-made record is something I try to bring into what I build.'

export const credit = 'Stills and artwork belong to their respective owners and are used here as personal references.'
