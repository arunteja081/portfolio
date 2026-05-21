import { motion } from 'framer-motion'
import { useRevealInView } from '../hooks/useRevealInView'
import { EXPERIENCE_DATA } from '../data/constants'

const Experience = () => {
  const { ref, inView } = useRevealInView()

  return (
    <section id="experience" ref={ref} className="section" style={{ background: 'var(--bg-page)' }}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-intro"
          style={{ textAlign: 'center' }}
        >
          <span className="badge badge-cyan" style={{ marginBottom: 16 }}>Experience</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16,
          }}>
            Professional Background
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            I have 2.5+ years of experience in the IT industry, specializing in software development, understanding customer issues, and providing effective solutions.
          </p>
        </motion.div>

        <div style={{ maxWidth: 760, marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {EXPERIENCE_DATA.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card card-pad-responsive"
              style={{ padding: '28px 32px' }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                <div>
                  <h3 className="font-display" style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                    {item.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--coral)' }}>{item.company}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border)', display: 'inline-block' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-faint)' }}>{item.period}</span>
                  </div>
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                  {i === 0 ? 'Current' : 'Training'}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 18 }}>
                {item.description}
              </p>

              {/* Highlights */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                {item.highlights.slice(0, 4).map((h, hi) => (
                  <li key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 5, background: 'var(--bg-accent-soft)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <polyline points="2,6 5,9 10,3" stroke="var(--coral)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {item.technologies.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
