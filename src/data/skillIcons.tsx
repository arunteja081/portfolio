import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiExpo,
  SiAndroidstudio,
  SiFastapi,
  SiPython,
  SiPostgresql,
  SiDebian,
  SiNginx,
  SiGitlab,
} from 'react-icons/si'
import { TbApi, TbCloudComputing, TbServer2 } from 'react-icons/tb'

export type SkillIconMeta = {
  Icon: IconType
  color: string
}

export const SKILL_ICONS: Record<string, SkillIconMeta> = {
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  Vite: { Icon: SiVite, color: '#646CFF' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  'React Native': { Icon: SiReact, color: '#61DAFB' },
  Expo: { Icon: SiExpo, color: '#1C1917' },
  'Android Studio': { Icon: SiAndroidstudio, color: '#3DDC84' },
  FastAPI: { Icon: SiFastapi, color: '#009688' },
  Python: { Icon: SiPython, color: '#3776AB' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  'REST APIs': { Icon: TbApi, color: '#6366F1' },
  'Linux (Debian)': { Icon: SiDebian, color: '#A81D33' },
  Linode: { Icon: TbServer2, color: '#00A95C' },
  Nginx: { Icon: SiNginx, color: '#009639' },
  'GitLab CI/CD': { Icon: SiGitlab, color: '#FC6D26' },
  'VPS Deployment': { Icon: TbCloudComputing, color: '#64748B' },
}
