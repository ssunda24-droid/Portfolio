export const profile = {
  name: 'Smruthi Sundar',
  role: 'Software engineer · Frontend & AI',
  location: 'Charlotte, NC',
  phone: '+1 (704) 241-0208',
  email: 'sundarsmruthi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/smruthi-s-67970526a/',
  github: 'https://github.com/ssunda24-droid',
  intro: 'I’m a software engineer who loves making complex things feel simple. I build polished, accessible interfaces and explore how AI can make everyday tools more useful.',
};

export const projects = [
  {
    number: '01', title: 'JobFit RAG', category: 'AI · RAG · Streamlit', year: '2026',
    description: 'A grounded resume and job matching assistant that finds relevant evidence, evaluates requirements, and explains where a candidate stands.',
    highlights: ['SUPPORTED / PARTIAL / MISSING classification', 'Deterministic match scoring', 'Resume evidence retrieval'],
    stack: ['LangChain', 'ChromaDB', 'Hugging Face', 'Groq'], url: 'https://jobfit-rag.streamlit.app/', tone: 'lavender', mark: 'JF',
  },
  {
    number: '02', title: 'Modular NotebookLM Clone', category: 'Generative AI · RAG', year: '2026',
    description: 'A multi-workspace research companion for chatting with documents, finding cited answers, and generating useful study materials.',
    highlights: ['PDF, TXT, PPTX & URL ingestion', 'Isolated notebook workspaces', 'Cited chat, reports, summaries & quizzes'],
    stack: ['Python', 'Pinecone', 'FastEmbed', 'Gradio'], url: 'https://notebooklm-clone-phvp.onrender.com/', tone: 'peach', mark: 'NLM',
  },
  {
    number: '03', title: 'Freelance Designer Portfolio', category: 'Frontend · Client work', year: '2026',
    description: 'A responsive portfolio site for a designer, translating a creative brief into reusable, carefully considered interface components.',
    highlights: ['Responsive page layouts', 'Reusable React components', 'Design-led implementation'],
    stack: ['React', 'JavaScript', 'CSS'], url: 'https://ishitatrihan.com/', tone: 'mint', mark: 'ID',
  },
  {
    number: '04', title: 'Cardiovascular Disease Prediction', category: 'Machine learning · Health', year: '2023',
    description: 'An interactive prediction app backed by an analysis of five cardiovascular datasets and a comparison of classical ML models.',
    highlights: ['Cleaned and combined five datasets', 'Compared five classification models', 'Gradient Boosting performed best'],
    stack: ['Python', 'Scikit-learn', 'Streamlit'], url: 'https://smruthi30-mlapp-heartt2-kder44.streamlit.app/', tone: 'blue', mark: '♥',
  },
];

export const experience = [
  { company: 'Comcast', role: 'Software Development Engineer 2', location: 'Chennai, India', dates: 'Apr 2026 — Jul 2026', points: ['Contribute to PI planning and sprint ceremonies to scope, estimate, and prioritize work.', 'Drive the frontend migration from JavaScript to TypeScript to improve safety and maintainability.', 'Review merge requests and support consistent engineering practices.'] },
  { company: 'Comcast', role: 'Software Development Engineer 1', location: 'Chennai, India', dates: 'Jul 2024 — Mar 2026', points: ['Built 25+ reusable React components for an enterprise agent portal spanning checkout, subscriptions, and customer workflows.', 'Turned business requirements and backend data into scalable interfaces with reliable state management.', 'Improved quality with Jest and React Testing Library; helped migrate a legacy portal, increasing agent adoption by 30%.'] },
  { company: 'Comcast', role: 'Development Intern', location: 'Chennai, India', dates: 'Jan 2024 — Jul 2024', points: ['Built frontend features with HTML, CSS, JavaScript, and React, following shared component and code quality practices.', 'Partnered with senior engineers in pair programming and contributed to Agile delivery, Git, and CI/CD workflows.'] },
];

export const education = [
  { school: 'University of North Carolina at Charlotte', degree: 'M.S. in Computer Science', detail: 'Expected May 2028', place: 'Charlotte, NC' },
  { school: 'SASTRA University', degree: 'B.S. in Information and Communication Technology', detail: 'CGPA 7.8 · Aug 2024', place: 'Tamil Nadu, India' },
];

export const skills = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'C++', 'SQL', 'HTML5', 'CSS3'] },
  { label: 'Frameworks & libraries', items: ['React', 'Node.js', 'Streamlit', 'Jest', 'React Testing Library', 'Tailwind CSS'] },
  { label: 'Tools & platforms', items: ['Git', 'GitHub', 'Jenkins', 'Jira'] },
  { label: 'Data & APIs', items: ['REST APIs', 'Axios / Fetch', 'JSON', 'HTTP', 'SQL basics'] },
];
