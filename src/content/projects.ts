import { shots } from './shots'

export type Project = {
  slug: string
  title: string
  status: 'Working demo' | 'Professional experience' | 'Professional work' | 'Completed'
  role: string
  stack: string[]
  summary: string
  visual: 'pred' | 'sec' | 'bot' | 'tab'
  /** Body items starting with "- " render as list items. Sections with an empty body are skipped. */
  sections: { heading: string; body: string[] }[]
  /** `wide` makes the figure span the full gallery width. */
  gallery?: { src: string; alt: string; caption: string; wide?: boolean }[]
}

export const projects: Project[] = [
  {
    slug: 'predicpau',
    title: 'PredicPAU',
    status: 'Working demo',
    role: 'Product concept, interface design, full-stack build',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Prisma', 'PostgreSQL'],
    summary: 'A gamified prediction market for PAU students, built around campus sport.',
    visual: 'pred',
    sections: [
      { heading: 'Overview', body: [
        'PredicPAU turns PAU sports fixtures, such as Coupe de Escriva matches, into simulated prediction markets. Students receive virtual currency and buy YES or NO shares on an outcome, and the prices show what the crowd expects to happen.',
        'The demo has 10 prediction markets and processed mock transactions across all of them. I presented it at the PAU Financial Society’s Demo Day. It is a demonstration, not a production market, and no real money is involved.',
      ] },
      { heading: 'The problem', body: [
        'Campus sport generates plenty of opinion and nowhere to put it on record. Students also meet market ideas in theory with few safe places to try them. A virtual-currency market lets them practise probability and risk with no financial exposure.',
      ] },
      { heading: 'My contribution', body: [
        'I wrote the product proposal, designed the landing page and trader dashboard, and built the demo: a React and TypeScript front end styled with Tailwind CSS, and an Express API using Prisma on PostgreSQL.',
      ] },
      { heading: 'Features', body: [
        'The demo, proposal and interface designs cover:',
        '- Prediction markets on campus fixtures, each with YES and NO prices',
        '- A virtual balance and mock transactions',
        '- A trader dashboard with balance, win streak, performance chart and recent positions',
        '- Leaderboards, streak rewards and achievement badges (in the proposal)',
        '- Admin-managed markets: create, close and resolve (in the proposal)',
      ] },
      { heading: 'Technologies', body: ['React, TypeScript and Tailwind CSS on the front end. Express with Prisma and PostgreSQL on the back end.'] },
      { heading: 'Challenges', body: [
        '- Keeping it a game, not gambling: virtual currency and clear rules.',
        '- Making prices feel fair in a small community where few people trade.',
        '- Making market resolution trustworthy when an admin decides the outcome.',
      ] },
      { heading: 'Lessons learned', body: [
        'Define the core loop first: predict, see the result, climb the leaderboard. Every other feature should support it.',
      ] },
    ],
    gallery: [
      { src: shots.predicDashboard, alt: 'The PredicPAU trader dashboard design: balance, streak, performance chart and recent positions.', caption: 'Trader dashboard design. Figures are sample data.', wide: true },
      { src: shots.predicLanding, alt: 'The PredicPAU landing page design with upcoming match markets.', caption: 'Landing page design. Marketing copy and figures are placeholder.' },
    ],
  },
  {
    slug: 'cybersecurity-vapt',
    title: 'Cybersecurity and VAPT',
    status: 'Professional experience',
    role: 'Cybersecurity analyst, Panoramic Synergy Enterprises (Aug 2022 to Sep 2024)',
    stack: ['Nessus', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Kali Linux', 'Pacu', 'ScoutSuite'],
    summary: 'Two years of vulnerability assessments and penetration tests, finished as CVSS-scored client reports.',
    visual: 'sec',
    sections: [
      { heading: 'Overview', body: [
        'Over two years as a cybersecurity analyst I ran vulnerability assessments across 500 to 1,000+ endpoints and network and cloud assets. I identified 50+ critical vulnerabilities, and the CVSS-scored reports I delivered led to a remediation rate above 80%.',
        'Client reports are confidential, so this page shows the method and an illustrative example, not real findings.',
      ] },
      { heading: 'The problem', body: [
        'Organisations need to know where their systems are weak, how serious each weakness is and what to fix first. A scan result is not enough on its own.',
      ] },
      { heading: 'My contribution', body: [
        'I led penetration tests for enterprise clients across payments, cloud and API security, and microfinance, covering network, application and AWS testing. I wrote up each engagement as a report with severity ratings and remediation steps.',
        'I also trained a cohort of 10 interns over 40+ hours on VAPT reporting and CEH exam preparation.',
      ] },
      { heading: 'Features', body: [
        'The method behind each engagement:',
        '- Scoping and discovery of endpoints, networks and cloud assets',
        '- Validation of findings through manual testing',
        '- CVSS-based severity scoring',
        '- Remediation recommendations in plain language',
        '- Reports that engineers and managers can both act on',
      ] },
      { heading: 'Technologies', body: ['Nessus and Metasploit for network testing, Burp Suite and OWASP ZAP for applications, Pacu and ScoutSuite for AWS and API testing, on Kali Linux. Certified Ethical Hacker (EC-Council), 2024.'] },
      { heading: 'Challenges', body: [
        '- Writing findings so technical and non-technical readers can both act on them.',
        '- Rating severity consistently rather than by instinct.',
      ] },
      { heading: 'Lessons learned', body: ['A finding only has value if someone can fix it. The report matters as much as the exploit.'] },
    ],
  },
  {
    slug: 'ai-chatbot',
    title: 'AI chatbot for a women’s products platform',
    status: 'Professional work',
    role: 'AI/ML and DevOps intern, Datamellon (Jul to Aug 2026): chatbot build and front-end UI',
    stack: ['Amazon Bedrock', 'Amazon S3', 'Amazon OpenSearch', 'AWS Lambda'],
    summary: 'A retrieval-augmented chatbot on Amazon Bedrock that answers from a client’s own documents.',
    visual: 'bot',
    sections: [
      { heading: 'Overview', body: [
        'A retrieval-augmented generation (RAG) chatbot proof of concept built on Amazon Bedrock at Datamellon, an AWS Advanced Tier Services Partner, for a client platform focused on women’s products. Company documents are ingested into a knowledge base, and the chatbot answers questions from that content in under 5 to 10 seconds.',
      ] },
      { heading: 'The problem', body: [
        'Customers have questions about products, eligibility and promotions, and want quick answers without searching through pages. A model that answers from the company’s own documents is easier to trust than one that guesses.',
      ] },
      { heading: 'My contribution', body: [
        'I built the proof of concept against the client’s Statement of Work, ingested the company documents into the knowledge base, and designed the chatbot’s front-end UI from concept through build.',
      ] },
      { heading: 'Features', body: [
        '- Answers drawn from the client’s ingested documents',
        '- Responses in under 5 to 10 seconds',
        '- Built to show sources and handle follow-up questions',
      ] },
      { heading: 'Technologies', body: ['Amazon Bedrock for the model and knowledge base, Amazon S3 for document storage, Amazon OpenSearch as the vector store, and AWS Lambda for the backend.'] },
    ],
  },
  {
    slug: 'sibas',
    title: 'SIBAS',
    status: 'Completed',
    role: 'Group project developer, DTS304',
    stack: ['Python', 'Streamlit', 'PostgreSQL', 'pandas', 'Altair', 'bcrypt'],
    summary: 'The Student/Instructor-Based Attendance System: attendance and records for admins, lecturers and students.',
    visual: 'tab',
    sections: [
      { heading: 'Overview', body: [
        'SIBAS is a role-based web app for recording and reviewing class attendance, built for DTS304 at Pan-Atlantic University. Admins manage users, students and courses. Lecturers take attendance and upload class data. Students see their own attendance and courses.',
      ] },
      { heading: 'The problem', body: ['Attendance and class records scatter across spreadsheets and paper, which makes it hard to see who is falling behind.'] },
      { heading: 'My contribution', body: ['I built it as part of a group, working in Python and Streamlit on top of a PostgreSQL database.'] },
      { heading: 'Features', body: [
        '- Three roles, each with its own dashboard: admin, lecturer and student',
        '- Admin tools for users, students, courses, reports and settings',
        '- Lecturer attendance sessions, class uploads from CSV files and reports',
        '- Student views of attendance, courses and profile',
        '- A configurable attendance threshold',
        '- Hashed passwords and chart-based reporting',
      ] },
      { heading: 'Technologies', body: ['Python and Streamlit for the application, PostgreSQL for the database, pandas and Altair for data and charts, and bcrypt for password hashing.'] },
    ],
    gallery: [
      { src: shots.sibasErd, alt: 'Entity relationship diagram for SIBAS showing users, students, lecturers, courses, enrollments, attendance sessions and records.', caption: 'Database design: 12 tables covering users and roles, courses, enrollments and attendance.', wide: true },
    ],
  },
]
