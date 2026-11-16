export type Project = {
  slug: string; title: string
  status: 'Concept · in development' | 'Professional experience' | 'Professional work' | 'Completed'
  role: string; stack: string[]; summary: string
  visual: 'pred' | 'sec' | 'bot' | 'tab'
  sections: { heading: string; body: string[] }[]
  gallery?: { src: string; alt: string; caption: string }[]
}
// Body items starting with "- " render as list items. Empty sections are skipped.
export const projects: Project[] = [
  { slug: 'pau-predictions', title: 'PAU Predictions', status: 'Concept · in development', role: 'Concept, interface design, front-end build', stack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite'],
    summary: 'A gamified prediction market for PAU students, built around campus sport.', visual: 'pred',
    sections: [
      { heading: 'Overview', body: ['A web platform where PAU students trade virtual currency on the outcomes of campus sports matches, such as Coupe de Escriva fixtures, by buying YES or NO shares. It is a product concept in development, not a live market, and no real money is involved.'] },
      { heading: 'The problem', body: ['Campus sport generates plenty of opinion and nowhere to put it on record. Students also learn market ideas in theory with few safe places to try them. A virtual-currency market lets them practise probability and risk without financial exposure.'] },
      { heading: 'My contribution', body: ['I shaped the concept, wrote the proposal and designed the interface, including the landing page and trader dashboard. The front end is built in React and TypeScript.'] },
      { heading: 'Features', body: ['- Sign-up with PAU email addresses and a starting virtual balance', '- YES/NO markets on campus matches, created and resolved by admins', '- Portfolio with active and resolved positions, profit and loss', '- Leaderboards, streak rewards and achievement badges', '- Admin dashboard for markets, users and moderation'] },
      { heading: 'Technologies', body: ['React and TypeScript on the front end. The proposal plans a Node.js and Express backend with SQLite for the MVP.'] },
      { heading: 'Challenges', body: ['- Keeping it a game, not gambling: virtual currency and clear rules.', '- Pricing that feels fair in a small community.', '- Making market resolution trustworthy when admins decide outcomes.'] },
      { heading: 'Lessons learned', body: ['Define the core loop first: predict, see the result, climb the leaderboard. Every other feature should support it.'] },
    ] },
  { slug: 'cybersecurity-vapt', title: 'Cybersecurity and VAPT', status: 'Professional experience', role: 'Assessments and report writing', stack: ['Burp Suite', 'Nessus', 'Kali Linux'],
    summary: 'Vulnerability assessments and penetration tests, finished as client VAPT reports.', visual: 'sec',
    sections: [
      { heading: 'Overview', body: ['Professional work on vulnerability assessments and penetration tests, finishing in VAPT reports for clients. Client reports are confidential, so this page shows the method and an illustrative example, not real findings.'] },
      { heading: 'The problem', body: ['Organisations need to know where their applications are weak, how serious each weakness is, and what to fix first.'] },
      { heading: 'My contribution', body: ['I carried out security assessments, identified vulnerabilities, rated their severity and documented remediation recommendations.'] },
      { heading: 'Features', body: ['- Vulnerability identification across applications', '- Severity evaluation using CVSS-style scoring', '- Clear remediation recommendations in the final report'] },
      { heading: 'Technologies', body: ['Burp Suite, Nessus and Kali Linux.'] },
      { heading: 'Challenges', body: ['- Writing findings so engineers and non-technical readers can both act on them.', '- Rating severity consistently rather than by instinct.'] },
      { heading: 'Lessons learned', body: ['A finding only has value if someone can fix it. The report matters as much as the exploit.'] },
    ] },
  { slug: 'ai-chatbot', title: 'AI chatbot for a women’s products platform', status: 'Professional work', role: 'Chatbot, backend and API work', stack: ['AWS Bedrock', 'Backend', 'API'],
    summary: 'A conversational assistant built on AWS Bedrock.', visual: 'bot',
    sections: [
      { heading: 'Overview', body: ['A conversational AI assistant for a platform focused on women’s products, built on AWS Bedrock.'] },
      { heading: 'The problem', body: ['Shoppers want quick, natural answers without digging through pages.'] },
      { heading: 'My contribution', body: ['I worked on the chatbot, its AWS Bedrock integration and the backend and API layer around it.'] },
      { heading: 'Features', body: ['- Conversational interface for product questions', '- Generative AI through AWS Bedrock', '- Backend and API integration'] },
    ] },
  { slug: 'classroom-platform', title: 'Classroom management platform', status: 'Completed', role: 'Developer', stack: ['Python', 'Streamlit', 'PostgreSQL'],
    summary: 'Student, teacher and classroom records in one place.', visual: 'tab',
    sections: [
      { heading: 'Overview', body: ['A student, teacher and classroom management platform for organising academic records and classroom information, built with Python and Streamlit.'] },
      { heading: 'The problem', body: ['Academic records and classroom details scatter easily across spreadsheets and paper.'] },
      { heading: 'My contribution', body: ['I built the application and its data model as part of a group project.'] },
      { heading: 'Features', body: ['- Student, teacher and classroom records in one place', '- Streamlit interface over a database', '- Practical data-management workflows'] },
    ] },
]
