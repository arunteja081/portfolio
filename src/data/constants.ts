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
  features: string[]
  technologies: string[]
  gradient: string
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
    title: 'AI-Powered Business Tool',
    description:
      'A custom AI automation platform built for a client to streamline their internal workflows, automate customer queries, and generate business reports — saving 20+ hours per week.',
    features: [
      'OpenAI GPT-4 integration for intelligent Q&A',
      'Automated report generation & email delivery',
      'Custom business dashboard with analytics',
      'Workflow automation with Python & FastAPI',
      'Real-time data processing & storage',
    ],
    technologies: ['FastAPI', 'Python', 'OpenAI API', 'React', 'PostgreSQL', 'Docker'],
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    icon: '🤖',
  },
  {
    title: 'E-Commerce Web Platform',
    description:
      'A full-featured e-commerce website built for a retail client with product management, payment gateway integration, SEO optimization, and mobile-first responsive design.',
    features: [
      'Mobile-first responsive design',
      'Razorpay / Stripe payment integration',
      'SEO-optimized product pages',
      'Admin dashboard for inventory management',
      'Blazing-fast load time (< 2s LCP)',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    icon: '🛒',
  },
  {
    title: 'Granite Visualization App',
    description:
      'An AI-powered room visualization mobile app allowing customers to see how granite & marble surfaces look in their spaces in real-time, boosting client conversion rates.',
    features: [
      'Real-time AI room visualization',
      'Cross-platform mobile app (iOS & Android)',
      'Redux state management architecture',
      'RESTful API backend integration',
      'Production deployment & monitoring',
    ],
    technologies: ['React Native', 'Redux', 'TypeScript', 'Node.js', 'PostgreSQL'],
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    icon: '🎨',
  },
  {
    title: 'SEO Business Website',
    description:
      'A high-performance, SEO-optimized business website for a digital marketing agency, achieving top Google rankings within 3 months with Core Web Vitals score of 95+.',
    features: [
      'Core Web Vitals score 95+',
      'Structured data & schema markup',
      'Blog & content management system',
      'Google Analytics & Search Console setup',
      'Lead generation & contact forms',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Analytics', 'Vercel'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    icon: '📈',
  },
]

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { label: 'Client Projects Delivered', value: 20, suffix: '+', icon: '🏆' },
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
