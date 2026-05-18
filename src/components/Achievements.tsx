import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="achievements" className="section" style={{ background: '#fff' }}>
      <div className="container-xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
        }}>
          {ACHIEVEMENTS_DATA.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card"
              style={{ padding: '32px 24px', textAlign: 'center' }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--bg-muted)', border: '1px solid var(--bg-accent-soft)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: 16,
              }}>
                {item.icon}
              </div>
              <div className="font-display" style={{
                fontSize: '2.25rem', fontWeight: 800, color: 'var(--coral)',
                lineHeight: 1, marginBottom: 8, letterSpacing: '-0.03em',
              }}>
                <Counter target={item.value} suffix={item.suffix} active={inView} />
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
