import { motion } from 'framer-motion'
import { useRevealInView } from '../hooks/useRevealInView'
import { PROJECTS_DATA } from '../data/constants'

const gradients = [
  'linear-gradient(135deg, #ff9a86 0%, #e8735a 100%)',
  'linear-gradient(135deg, #ffb89e 0%, #e8735a 100%)',
  'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #e8735a 100%)',
]

const LockIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const Projects = () => {
  const { ref, inView } = useRevealInView()

  return (
    <section id="projects" ref={ref} className="section" style={{ background: 'var(--bg-page)' }}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-intro"
          style={{ textAlign: 'center' }}
        >
          <span className="badge badge-violet" style={{ marginBottom: 16 }}>Production Work</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16,
          }}>
            Organizational Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Real products I designed and built in my professional role. Names, code, and demos stay private —
            what follows is an anonymized view of my work and impact.
          </p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card project-card"
              style={{ overflow: 'hidden' }}
            >
              <div className="project-card-preview" style={{
                height: 140,
                background: gradients[i % gradients.length],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -40, right: -40, width: 140, height: 140,
                  borderRadius: '50%', background: 'rgba(255,255,255,0.10)',
                }} />
                <div style={{
                  position: 'absolute', bottom: -30, left: -30, width: 100, height: 100,
                  borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                }} />
                <span
                  className="project-card-icon"
                  style={{ fontSize: '3.5rem', lineHeight: 1, position: 'relative', zIndex: 1 }}
                  aria-hidden
                >
                  {project.icon}
                </span>
                <span style={{
                  position: 'absolute', top: 12, right: 12, zIndex: 2,
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  padding: '5px 10px', borderRadius: 99,
                  background: 'rgba(15, 23, 42, 0.35)', backdropFilter: 'blur(6px)',
                  color: '#fff', fontSize: '0.625rem', fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  <LockIcon size={11} />
                  NDA
                </span>
              </div>

              <div className="project-card-body">
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span className="badge badge-confidential">NDA</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontWeight: 500 }}>
                    {project.role}
                  </span>
                </div>

                <h3 className="font-display" style={{
                  fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8,
                }}>
                  {project.title}
                </h3>

                <p className="text-body text-body-sm" style={{ marginBottom: 14 }}>
                  {project.description}
                </p>

                <ul className="text-body text-body-sm" style={{ listStyle: 'none', marginBottom: 14, display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                  {project.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginTop: 3, flexShrink: 0 }}>
                        <circle cx="8" cy="8" r="7" fill="var(--bg-accent-soft)" />
                        <polyline points="5,8 7,10 11,6" stroke="var(--coral)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                  {project.technologies.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                <p style={{
                  marginTop: 14, fontSize: '0.75rem', color: 'var(--text-faint)', fontStyle: 'italic',
                  borderTop: '1px solid var(--border-light)', paddingTop: 12,
                }}>
                  Scope & architecture — available on request
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="card"
          style={{
            marginTop: 32,
            padding: '22px 24px',
            textAlign: 'center',
            background: 'var(--bg-accent-soft)',
            borderColor: 'var(--peach)',
          }}
        >
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Why no live links?</strong>{' '}
            These are company-owned products. I respect NDAs and do not publish org code or screenshots.
            I’m happy to explain relevant experience in a call or interview.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 40 }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.9375rem' }}>
            Need something built for your business? I bring the same production standards to freelance work.
          </p>
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
