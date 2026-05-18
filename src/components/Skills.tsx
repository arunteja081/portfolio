import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section" style={{ background: '#fff' }}>
      <div className="container-xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span className="badge badge-violet" style={{ marginBottom: 16 }}>Tech Stack</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16,
          }}>
            Skills & Technologies
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Modern, production-tested tools I use to build reliable applications end-to-end.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {techGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 24,
                padding: '22px 28px',
                background: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 14,
              }}
            >
              {/* Category label */}
              <div style={{
                minWidth: 140, paddingTop: 2,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
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

              {/* Divider */}
              <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--bg-muted)', flexShrink: 0 }} />

              {/* Skill pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      padding: '6px 14px',
                      background: group.bg,
                      border: `1px solid ${group.border}`,
                      borderRadius: 8,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: group.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
