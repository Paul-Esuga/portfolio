import { shots } from './shots'

export type Accent = 'flame' | 'amber'
/** Images are shown as they are, with a border and a hard offset shadow in the accent colour. No coloured backgrounds. */
export type Cover =
  | { type: 'shot'; src: string; alt: string; accent: Accent }
  | { type: 'stack'; accent: Accent; shots: { src: string; alt: string }[] }

export type Project = {
  slug: string
  title: string
  status: 'Working demo' | 'Professional experience' | 'Professional work' | 'Completed'
  role: string
  stack: string[]
  summary: string
  /** The tile on the home page, and the lead image on the case page. */
  cover: Cover
  /** Body items starting with "- " render as list items. Sections with an empty body are skipped. */
  sections: { heading: string; body: string[] }[]
  /** `wide` makes the figure span the full gallery width. */
  gallery?: { src: string; alt: string; caption: string; wide?: boolean }[]
}

export const projects: Project[] = [
  {
    slug: 'probabli',
    title: 'Probabli',
    status: 'Working demo',
    role: 'Product concept, interface design, full-stack build',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Prisma', 'PostgreSQL'],
    summary: 'A gamified prediction market for PAU students, built around campus sport.',
    cover: { type: 'shot', src: shots.probabliDashboard, alt: 'The Probabli trader dashboard with virtual balance, win streak, market pulse and upcoming events.', accent: 'flame' },
    sections: [
      { heading: 'Overview', body: [
        'Probabli (originally called PredicPAU) turns PAU sports fixtures, such as Coupe de Escriva matches, into simulated prediction markets. Students receive virtual currency and buy YES or NO shares on an outcome, and the prices show what the crowd expects to happen.',
        'The demo has 10 prediction markets and processed mock transactions across all of them. I presented it at the PAU Financial Society’s Demo Day. It is a demonstration, not a production market, and no real money is involved.',
      ] },
      { heading: 'The problem', body: [
        'Campus sport generates plenty of opinion and nowhere to put it on record. Students also meet market ideas in theory with few safe places to try them. A virtual-currency market lets them practise probability and risk with no financial exposure.',
      ] },
      { heading: 'My contribution', body: [
        'I wrote the product proposal, designed the landing page and trader dashboard, and built the demo: a React and TypeScript front end styled with Tailwind CSS, and an Express API using Prisma on PostgreSQL.',
      ] },
      { heading: 'Features', body: [
        'The working demo includes:',
        '- Prediction markets on campus fixtures and events, each with YES and NO prices',
        '- A virtual balance and mock transactions',
        '- A trader dashboard with balance, win streak, market pulse, a performance chart, upcoming markets and recent positions',
        'Planned in the proposal: leaderboards, streak rewards, achievement badges, and admin-managed markets.',
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
      { src: shots.probabliDashboard, alt: 'The Probabli trader dashboard: virtual balance, win streak, market pulse, a performance chart, upcoming events and recent positions.', caption: 'The working demo’s trader dashboard. Figures are sample data.', wide: true },
      { src: shots.predicDashboard, alt: 'An early design of the trader dashboard under the working title PredicPAU.', caption: 'An early interface design, under the working title PredicPAU.', wide: true },
    ],
  },
  {
    slug: 'cybersecurity-vapt',
    title: 'Cybersecurity and VAPT',
    status: 'Professional experience',
    role: 'Cybersecurity analyst, Panoramic Synergy Enterprises (Aug 2022 to Sep 2024)',
    stack: ['Nessus', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Kali Linux', 'Pacu', 'ScoutSuite'],
    summary: 'Two years of vulnerability assessments and penetration tests, finished as CVSS-scored client reports.',
    cover: { type: 'stack', accent: 'amber', shots: [
      { src: shots.vulnNmap, alt: 'Nmap output for an Apache web server, followed by known vulnerabilities with severity scores.' },
      { src: shots.vulnCiphers, alt: 'A TLS cipher scan showing deprecated protocol versions accepted.' },
      { src: shots.vulnSslscan, alt: 'A TLS protocol check with TLS 1.0 and 1.1 enabled. The server address is blurred.' },
    ] },
    sections: [
      { heading: 'Overview', body: [
        'Over two years as a cybersecurity analyst I ran vulnerability assessments across 500 to 1,000+ endpoints and network and cloud assets. I identified 50+ critical vulnerabilities, and the CVSS-scored reports I delivered led to a remediation rate above 80%.',
        'Client reports are confidential, so this page shows the method and real scan output from my testing, with the target’s address and name blurred.',
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
    gallery: [
      { src: shots.vulnNmap, alt: 'Nmap output for an Apache web server on port 80, followed by a list of known vulnerabilities, each with a severity score.', caption: 'A service scan lists known vulnerabilities for the web server version, each with a severity score. Target details are blurred.' },
      { src: shots.vulnCiphers, alt: 'A TLS cipher scan showing TLS 1.0, 1.1 and 1.2 accepted, including a 3DES cipher suite.', caption: 'A cipher scan shows deprecated TLS versions and a 3DES cipher suite still accepted.' },
      { src: shots.vulnSslscan, alt: 'A TLS protocol check showing SSLv2 and SSLv3 disabled, TLS 1.0, 1.1 and 1.2 enabled, TLS 1.3 disabled, and no support for TLS fallback SCSV. The server address is blurred.', caption: 'A protocol check shows TLS 1.0 and 1.1 still enabled, TLS 1.3 not enabled and no fallback protection. The server address is blurred.' },
    ],
  },
  {
    slug: 'ai-chatbot',
    title: 'AI chatbot for a women’s products platform',
    status: 'Professional work',
    role: 'AI/ML and DevOps intern, Datamellon (Jul to Aug 2026): chatbot build and front-end UI',
    stack: ['Amazon Bedrock', 'Amazon S3', 'Amazon OpenSearch Serverless', 'AWS Lambda', 'API Gateway', 'DynamoDB'],
    summary: 'A retrieval-augmented chatbot on Amazon Bedrock that answers from a client’s own documents.',
    cover: { type: 'shot', src: shots.chatbotArchitecture, alt: 'Architecture diagram: a user calls API Gateway, which triggers a request Lambda that retrieves content from an OpenSearch vector store, stores chat history in DynamoDB and generates a response with a Bedrock model. A second Lambda uploads documents to S3 for ingestion.', accent: 'flame' },
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
      { heading: 'Technologies', body: ['Amazon Bedrock for the model and knowledge base, with Amazon Titan embeddings. Amazon S3 holds the documents and Amazon OpenSearch Serverless is the vector store. API Gateway fronts two Lambda functions, one for chat requests and one for document uploads, and DynamoDB keeps the chat history so follow-up questions have context.'] },
      { heading: 'Challenges', body: [
        '- Getting the vector store working took the longest. Amazon OpenSearch Serverless kept returning the same error when I created a collection by hand and connected it to the knowledge base, and creating it inside the knowledge-base setup flow failed several times. I eventually worked out how to create the collection manually and then link it.',
        '- Cost. Two OpenSearch Serverless collections were running in the Europe (Stockholm) region and had nearly used up the free-tier and promotional credits.',
        '- Timing. I was working on a certification at the same time, and the first version of the chatbot experience was poor.',
      ] },
      { heading: 'Lessons learned', body: [
        '- Doing a step by hand showed me what the automated setup was doing, and that is what finally got the vector store connected.',
        '- Managed services keep billing while they sit idle, so clearing out unused resources and watching usage belongs in the plan from the start.',
        '- A working pipeline is not a good chatbot. The experience needs its own time, which a crowded schedule took away at first.',
      ] },
    ],
  },
  {
    slug: 'sibas',
    title: 'SIBAS',
    status: 'Completed',
    role: 'Database design and setup, group project (DTS304)',
    stack: ['Python', 'Streamlit', 'PostgreSQL', 'pandas', 'Altair', 'bcrypt'],
    summary: 'The Student/Instructor-Based Attendance System: attendance and records for admins, lecturers and students.',
    cover: { type: 'shot', src: shots.sibasErd, alt: 'Entity relationship diagram for SIBAS: users, students, lecturers, courses, enrollments, attendance sessions and records.', accent: 'amber' },
    sections: [
      { heading: 'Overview', body: [
        'SIBAS is a role-based web app for recording and reviewing class attendance, built for DTS304 at Pan-Atlantic University. Admins manage users, students and courses. Lecturers take attendance and upload class data. Students see their own attendance and courses.',
      ] },
      { heading: 'The problem', body: ['Attendance and class records scatter across spreadsheets and paper, which makes it hard to see who is falling behind.'] },
      { heading: 'My contribution', body: ['I designed the database schema and set up the PostgreSQL database, defining the tables and making sure every relationship between them was implemented correctly. The team built the Streamlit application on top of it.'] },
      { heading: 'Features', body: [
        '- Three roles, each with its own dashboard: admin, lecturer and student',
        '- Admin tools for users, students, courses, reports and settings',
        '- Lecturer attendance sessions, class uploads from CSV files and reports',
        '- Student views of attendance, courses and profile',
        '- A configurable attendance threshold',
        '- Hashed passwords and chart-based reporting',
      ] },
      { heading: 'Technologies', body: ['Python and Streamlit for the application, PostgreSQL for the database, pandas and Altair for data and charts, and bcrypt for password hashing.'] },
      { heading: 'Challenges', body: [
        '- The relationships were the hardest part of the schema. Students, lecturers, courses, enrollments and attendance connect through one-to-many and many-to-many relationships, and some records depend on others to exist at all, so there were many connected parts to keep consistent.',
        '- The work was not shared evenly. Most of the build fell to a teammate and me.',
        '- The Streamlit app did not connect to the database at first, and it took several fixes before the two talked to each other.',
      ] },
      { heading: 'Lessons learned', body: [
        '- Settle the schema first. Every decision about a relationship shows up later in a query and a screen.',
        '- Test the connection between the app and the database early, before building screens on top of it.',
        '- When a group is uneven, agree who owns what at the start and check in often.',
      ] },
    ],
    gallery: [
      { src: shots.sibasErd, alt: 'Entity relationship diagram for SIBAS showing users, students, lecturers, courses, enrollments, attendance sessions and records.', caption: 'Database design: 12 tables covering users and roles, courses, enrollments and attendance.', wide: true },
    ],
  },
]
