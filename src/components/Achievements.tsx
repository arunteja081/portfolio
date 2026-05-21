import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRevealInView } from '../hooks/useRevealInView'
import { ACHIEVEMENTS_DATA } from '../data/constants'

const Counter = ({ target, suffix, active }: { target: number; suffix: string; active: boolean }) => {
  const [count, setCount] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    if (!active || done.current) return
    done.current = true
    const duration = 1600
    const steps = 60
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (step >= steps) { setCount(target); clearInterval(timer) }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target])

  return <>{count}{suffix}</>
}

const Achievements = () => {
  const { ref, inView } = useRevealInView()

  return (
    <section id="achievements" ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-intro"
          style={{ textAlign: 'center' }}
        >
          <span className="badge badge-emerald" style={{ marginBottom: 16 }}>Results</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16,
          }}>
            Impact by the Numbers
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Measurable outcomes across projects, systems, and client engagements.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {ACHIEVEMENTS_DATA.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card achievement-card"
            >
              <div className="achievement-icon" style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--bg-muted)', border: '1px solid var(--bg-accent-soft)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: 16, flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div className="font-display achievement-value" style={{
                fontSize: '2.25rem', fontWeight: 800, color: 'var(--coral)',
                lineHeight: 1, marginBottom: 8, letterSpacing: '-0.03em',
              }}>
                <Counter target={item.value} suffix={item.suffix} active={inView} />
              </div>
              <div className="achievement-label" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
