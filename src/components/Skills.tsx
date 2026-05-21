import { motion } from 'framer-motion'
import { useRevealInView } from '../hooks/useRevealInView'
import { SKILL_ICONS } from '../data/skillIcons'

const techGroups = [
  {
    category: 'Frontend',
    color: 'var(--coral)',
    bg: 'var(--bg-muted)',
    border: 'var(--bg-accent-soft)',
    skills: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Mobile',
    color: '#06B6D4',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    skills: ['React Native', 'Expo', 'Android Studio'],
  },
  {
    category: 'Backend',
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    skills: ['FastAPI', 'Python', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'DevOps & Deployment',
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: '#FDE68A',
    skills: ['Linux (Debian)', 'Linode', 'Nginx', 'GitLab CI/CD', 'VPS Deployment'],
  },
]

const Skills = () => {
  const { ref, inView } = useRevealInView()

  return (
    <section id="skills" ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-intro"
          style={{ textAlign: 'center' }}
        >
          <span className="badge badge-violet" style={{ marginBottom: 16 }}>Tech Stack</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16,
          }}>
            Skills & Technologies
          </h2>
          <p className="text-body" style={{ maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Modern, production-tested tools I use to build reliable applications end-to-end.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {techGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="skill-row"
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 24,
                padding: '22px 28px',
                background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 14,
              }}
            >
              <div
                className="skill-category-label"
                style={{
                  minWidth: 140, paddingTop: 2,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}
              >
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: group.color, flexShrink: 0,
                }} />
                <span className="font-display" style={{
                  fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)',
                }}>
                  {group.category}
                </span>
              </div>

              <div className="skill-row-divider" style={{ width: 1, alignSelf: 'stretch', background: 'var(--bg-muted)', flexShrink: 0 }} />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
                {group.skills.map(skill => {
                  const meta = SKILL_ICONS[skill]
                  const Icon = meta?.Icon
                  return (
                    <span
                      key={skill}
                      className="skill-pill"
                      style={{
                        background: group.bg,
                        border: `1px solid ${group.border}`,
                        color: 'var(--text-body)',
                      }}
                    >
                      {Icon && (
                        <span className="skill-pill-icon" style={{ color: meta.color }} aria-hidden>
                          <Icon />
                        </span>
                      )}
                      {skill}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
