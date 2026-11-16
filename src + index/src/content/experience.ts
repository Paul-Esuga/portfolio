export type Role = { org: string; role: string; when: string; facts: string[] }

export const experience: Role[] = [
  { org: 'Datamellon', role: 'AI/ML and DevOps intern', when: 'Jul to Aug 2026',
    facts: [
      'Built a retrieval-augmented chatbot proof of concept on Amazon Bedrock against a client Statement of Work, and designed its front-end UI end to end.',
      'Ran 50+ manual test cases on a gamified educational web app, logging close to 100 bugs and design issues before launch.',
    ] },
  { org: 'Ecobank Eprocess Nigeria', role: 'Software developer, summer intern', when: 'Jul to Sep 2025',
    facts: [
      'Delivered the web and mobile front end for an e-learning platform. Launch was paused pending backend integration outside my scope.',
      'Diagnosed a recurring authentication bug, documenting five instances with reproduction steps to help isolate the cause.',
    ] },
  { org: 'PAU Financial Society', role: 'Co-head, Fintech Division', when: '2024 to present',
    facts: [
      'Built a weighted credit-card transaction risk-scoring model in Python on a dataset of 1M+ records, then used K-Means clustering to sort transactions into three risk tiers.',
    ] },
  { org: 'Panoramic Synergy Enterprises', role: 'Cybersecurity analyst', when: 'Aug 2022 to Sep 2024',
    facts: [
      'Vulnerability assessments across 500 to 1,000+ endpoints and network and cloud assets; 50+ critical findings and an 80%+ remediation rate through CVSS-scored reports.',
      'Trained a cohort of 10 interns over 40+ hours on VAPT reporting and CEH exam preparation.',
    ] },
]

export const education = {
  school: 'Pan-Atlantic University',
  degree: 'BSc Software Engineering, expected December 2027',
  detail: 'CGPA 4.82 / 5.0, First Class Honours track',
  cert: 'Certified Ethical Hacker, EC-Council, 2024',
  also: ['SEO Africa Global Tech Division fellow, 2025', 'Hostel representative for about 250 residents, Oct 2025 to Jun 2026'],
}

export const toolbox = [
  { group: 'Cloud and DevOps', items: 'AWS (Bedrock, Lambda, S3, OpenSearch), Docker, Git' },
  { group: 'Languages and web', items: 'Python, C++, Java, JavaScript and TypeScript, React, Node.js and Express' },
  { group: 'Security', items: 'Kali Linux, Burp Suite, Metasploit, Nessus, OWASP ZAP' },
]
