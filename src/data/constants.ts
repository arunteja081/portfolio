export interface Skill {
  name: string
  icon: string
  level: number
}

export interface SkillCategory {
  title: string
  icon: string
  color: string
  skills: Skill[]
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  role: string
  features: string[]
  technologies: string[]
  icon: string
}

export interface Achievement {
  label: string
  value: number
  suffix: string
  icon: string
}

export interface Repository {
  name: string
  description: string
  language: string
  languageColor: string
  stars: number
  forks: number
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/aruntejavemunuri',
  linkedin: 'https://www.linkedin.com/in/vemunuri-arun-teja-a31965235/',
  email: 'mailto:arunteja.techai@gmail.com',
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'React.js', icon: '⚛️', level: 92 },
      { name: 'TypeScript', icon: '🔷', level: 88 },
      { name: 'JavaScript', icon: '⚡', level: 95 },
      { name: 'Tailwind CSS', icon: '💨', level: 90 },
      { name: 'React Native', icon: '📱', level: 82 },
      { name: 'Next.js', icon: '▲', level: 80 },
      { name: 'HTML5 / CSS3', icon: '📄', level: 95 },
    ],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 88 },
      { name: 'Express.js', icon: '🚂', level: 85 },
      { name: 'FastAPI (Python)', icon: '🐍', level: 80 },
      { name: 'REST APIs', icon: '🔌', level: 92 },
      { name: 'API Integration', icon: '🔗', level: 90 },
      { name: 'Authentication & JWT', icon: '🔐', level: 85 },
    ],
  },
  {
    title: 'AI & Automation',
    icon: '🤖',
    color: 'from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'OpenAI APIs', icon: '🧠', level: 82 },
      { name: 'AI Tool Integration', icon: '⚡', level: 80 },
      { name: 'Chatbot Development', icon: '💬', level: 78 },
      { name: 'Workflow Automation', icon: '🔄', level: 82 },
      { name: 'Python Scripting', icon: '🐍', level: 80 },
    ],
  },
  {
    title: 'Database & Storage',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'PostgreSQL', icon: '🐘', level: 88 },
      { name: 'MySQL', icon: '🐬', level: 82 },
      { name: 'MongoDB', icon: '🍃', level: 75 },
      { name: 'Redis', icon: '🔴', level: 72 },
    ],
  },
  {
    title: 'SEO & Digital Marketing',
    icon: '📈',
    color: 'from-orange-500 to-yellow-500',
    skills: [
      { name: 'Technical SEO', icon: '🔍', level: 85 },
      { name: 'Core Web Vitals', icon: '⚡', level: 88 },
      { name: 'On-Page SEO', icon: '📝', level: 82 },
      { name: 'Performance Optimization', icon: '🚀', level: 90 },
      { name: 'Google Analytics', icon: '📊', level: 80 },
    ],
  },
  {
    title: 'DevOps & Deployment',
    icon: '🚀',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'GitLab CI/CD', icon: '🔄', level: 88 },
      { name: 'Docker', icon: '🐳', level: 80 },
      { name: 'Linux / Nginx', icon: '🐧', level: 85 },
      { name: 'PM2', icon: '📊', level: 85 },
      { name: 'VPS Deployment', icon: '☁️', level: 88 },
    ],
  },
]

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Software Developer',
    company: 'VNV LOGIXPACE PRIVATE LIMITED',
    period: 'Jan 2025 — Present',
    description:
      'Full Stack Software Developer with complete ownership across scalable frontend systems, mobile applications, backend APIs, and cloud deployment workflows.',
    highlights: [
      'Led end-to-end development of production-grade web and mobile applications using React.js and React Native.',
      'Architected and integrated scalable backend REST APIs using FastAPI, Python, and PostgreSQL.',
      'Managed cloud infrastructure, production hosting, and operational reliability on Linode VPS.',
      'Implemented automated deployment pipelines and CI/CD workflows using GitLab CI and Linux (Debian) servers.',
    ],
    technologies: ['React.js', 'React Native', 'FastAPI', 'Python', 'PostgreSQL', 'Linux (Debian)', 'Linode', 'GitLab CI/CD'],
  },
]

export const PROJECTS_DATA: Project[] = [
  {
    title: 'AI Business Automation Platform',
    role: 'Full stack development & integration',
    description:
      'Production platform I built at my organization to automate internal workflows, customer Q&A, and reporting. Codebase and UI are confidential — this summarizes my contribution.',
    features: [
      'OpenAI API integration for intelligent Q&A',
      'Automated reports & email delivery pipelines',
      'Analytics dashboard for business teams',
      'FastAPI services with PostgreSQL',
    ],
    technologies: ['FastAPI', 'Python', 'OpenAI API', 'React', 'PostgreSQL', 'Docker'],
    icon: '🤖',
  },
  {
    title: 'E-Commerce Web Platform',
    role: 'End-to-end web engineering',
    description:
      'Full retail web platform delivered in a professional environment. I owned frontend, integrations, and performance — product name and assets are not public.',
    features: [
      'Mobile-first storefront & admin flows',
      'Payment gateway integration',
      'SEO-focused product pages',
      'Inventory & order management UI',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    icon: '🛒',
  },
  {
    title: 'Room Visualization Mobile App',
    role: 'React Native & API integration',
    description:
      'Cross-platform app for real-time product visualization in customer spaces. Built and shipped in production; details shared only under NDA.',
    features: [
      'Real-time visualization experience',
      'iOS & Android with React Native',
      'Redux architecture & API layer',
      'Production builds & release support',
    ],
    technologies: ['React Native', 'Redux', 'TypeScript', 'REST APIs', 'PostgreSQL'],
    icon: '📱',
  },
  {
    title: 'High-Performance Business Website',
    role: 'Frontend, SEO & performance',
    description:
      'Marketing site optimized for search and Core Web Vitals. I implemented structure, speed, and analytics — hosted and maintained in a private org environment.',
    features: [
      'Core Web Vitals & technical SEO',
      'Structured data & metadata',
      'Content-ready layout system',
      'Analytics & lead capture forms',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Technical SEO'],
    icon: '📈',
  },
]

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { label: 'Production Projects Shipped', value: 20, suffix: '+', icon: '🏆' },
  { label: 'Websites Launched', value: 15, suffix: '+', icon: '🌐' },
  { label: 'AI Tools Built', value: 5, suffix: '+', icon: '🤖' },
  { label: 'Client Satisfaction', value: 98, suffix: '%', icon: '⭐' },
  { label: 'Years of Experience', value: 3, suffix: '+', icon: '🚀' },
]

export const REPOSITORIES_DATA: Repository[] = [
  {
    name: 'granite-viz-platform',
    description: 'AI-powered room visualization platform with React Native & Redux',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 24,
    forks: 8,
  },
  {
    name: 'fastapi-ai-toolkit',
    description: 'FastAPI + Python boilerplate for AI-powered business automation tools',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 38,
    forks: 14,
  },
  {
    name: 'nextjs-seo-starter',
    description: 'Production-ready Next.js template with SEO, analytics & performance built-in',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 56,
    forks: 20,
  },
  {
    name: 'ecommerce-platform',
    description: 'Full-stack e-commerce platform with Stripe, admin dashboard & inventory management',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 31,
    forks: 12,
  },
  {
    name: 'react-component-library',
    description: 'Reusable React component library with TypeScript & Storybook',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 44,
    forks: 18,
  },
  {
    name: 'devops-pipeline-configs',
    description: 'GitLab CI/CD pipeline templates for automated VPS deployments',
    language: 'Shell',
    languageColor: '#89e051',
    stars: 42,
    forks: 15,
  },
]
