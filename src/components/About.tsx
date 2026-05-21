import { motion } from 'framer-motion'
import { useRevealInView } from '../hooks/useRevealInView'

const services = [
  {
    icon: '🌐',
    title: 'Website & Web Apps',
    description: 'Fast, responsive, and SEO-ready web applications built with React and Next.js that convert visitors into customers.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS & Android apps using React Native — from MVP to production-ready, delivered on time.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: '🤖',
    title: 'AI Tools & Automation',
    description: 'Custom AI-powered solutions using FastAPI and OpenAI to automate workflows and save your team hours every week.',
    tags: ['FastAPI', 'OpenAI', 'Python'],
  },
  {
    icon: '📈',
    title: 'SEO & Digital Marketing',
    description: 'Technical SEO, Core Web Vitals optimization, and performance tuning to rank higher and convert more.',
    tags: ['Technical SEO', 'Analytics', 'Performance'],
  },
  {
    icon: '💼',
    title: 'Business Solutions',
    description: 'Custom dashboards, CRM systems, admin panels, and internal tools tailored precisely to your workflows.',
    tags: ['Dashboards', 'CRM', 'APIs'],
  },
  {
    icon: '🚀',
    title: 'Startup MVPs',
    description: 'Validate your idea fast. I build polished, investor-ready MVPs in 2–4 weeks so you can start learning from real users.',
    tags: ['MVP', 'Full Stack', 'Fast Delivery'],
  },
]

const pillars = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'MVPs in 2–4 weeks. Full projects on schedule, always.' },
  { icon: '🛡️', title: 'Production-Ready', desc: 'Tested, deployed code that scales from day one.' },
  { icon: '💬', title: 'Clear Communication', desc: "Regular updates. You always know what's happening." },
  { icon: '🤝', title: 'Ongoing Support', desc: 'I stay with you post-launch. No ghosting.' },
]

const About = () => {
  const { ref, inView } = useRevealInView()

  return (
    <section id="about" ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container-xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-intro"
          style={{ textAlign: 'center' }}
        >
          <span className="badge badge-violet" style={{ marginBottom: 16 }}>Services</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16,
          }}>
            What I Build for Clients
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            From solo entrepreneurs to growing businesses — I build digital products that attract clients, automate work, and scale online.
          </p>
        </motion.div>

        {/* Services grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 20,
            marginBottom: 48,
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card card-lift"
              style={{ padding: '28px 28px 24px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                <span style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }}>{s.icon}</span>
                <h3 className="font-display" style={{
                  fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0,
                }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 18 }}>
                {s.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {s.tags.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why work with me */}
        <div className="card card-pad-lg" style={{ padding: '40px 40px 36px', marginBottom: 32 }}>
          <h3 className="font-display" style={{
            fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)',
            textAlign: 'center', marginBottom: 36,
          }}>Why Clients Choose Me</h3>
          <div
            className="pillars-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
              gap: 32,
            }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'var(--bg-muted)', border: '1px solid var(--bg-accent-soft)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: 14,
                }}>{p.icon}</div>
                <h4 className="font-display" style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, fontSize: '0.9375rem' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
