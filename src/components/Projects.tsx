import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROJECTS_DATA } from '../data/constants'

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const gradients = [
    'linear-gradient(135deg, #ff9a86 0%, #e8735a 100%)',
    'linear-gradient(135deg, #ffb89e 0%, #e8735a 100%)',
    'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #e8735a 100%)',
  ]

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-page)' }}>
      <div className="container-xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span className="badge badge-violet" style={{ marginBottom: 16 }}>Featured Work</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16,
          }}>
            Projects & Case Studies
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            A selection of real-world projects that demonstrate engineering depth and business impact.
          </p>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', gap: 24 }}>
          {PROJECTS_DATA.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card card-lift"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Preview band */}
              <div style={{
                height: 160, background: gradients[i % gradients.length],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Geometric accent */}
                <div style={{
                  position: 'absolute', top: -40, right: -40, width: 140, height: 140,
                  borderRadius: '50%', background: 'rgba(255,255,255,0.10)',
                }} />
                <div style={{
                  position: 'absolute', bottom: -30, left: -30, width: 100, height: 100,
                  borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                }} />
                <span style={{ fontSize: '3.5rem', position: 'relative', zIndex: 1 }}>{project.icon}</span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="font-display" style={{
                  fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8,
                }}>{project.title}</h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 20 }}>
                  {project.description}
                </p>

                {/* Impact bullets */}
                <ul style={{ listStyle: 'none', marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {project.features.slice(0, 4).map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginTop: 3, flexShrink: 0 }}>
                        <circle cx="8" cy="8" r="7" fill="var(--bg-accent-soft)"/>
                        <polyline points="5,8 7,10 11,6" stroke="var(--coral)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                  {project.technologies.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.9375rem' }}>
            Have a project in mind? Let's build something great together.
          </p>
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
