import { motion, type Variants } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease, type: 'spring', stiffness: 200, damping: 18 },
  },
}

const TECH_TAGS = ['React & Next.js', 'Node.js', 'TypeScript', 'AWS', 'System Design']

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflowX: 'hidden',
        background: 'var(--bg-page)',
        borderBottom: '1px solid var(--border-light)',
        paddingTop: 64,
        paddingBottom: 32,
        boxSizing: 'border-box',
      }}
    >
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage:
            'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
          animation: 'panGrid 20s linear infinite',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden"
        style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(255, 154, 134,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'floatGlow 8s ease-in-out infinite',
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle at center, rgba(59,130,246,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'floatOrb1 12s ease-in-out infinite',
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '20px',
            right: '10%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle at center, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'floatOrb2 15s ease-in-out infinite',
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-40 z-0 opacity-60"
        fill="var(--coral)"
      />

      {/* Content */}
      <motion.div
        className="container-xl hero-inner"
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: 40,
          paddingBottom: 16,
          marginTop: 36,
        }}
      >
        <div className="hero-layout">
          <div className="hero-content">
            <motion.p className="hero-greeting font-display" variants={fadeUp}>
              Hi, I'm Arun <span aria-hidden>👋</span>
            </motion.p>

            <motion.h1 className="font-display hero-headline" variants={fadeUp}>
              I build digital products that{' '}
              <span className="text-gradient hero-gradient-text">drive business growth.</span>
            </motion.h1>

            <motion.p className="hero-lead" variants={fadeUp}>
              Full stack engineer shipping production web apps, mobile experiences, and APIs —
              from architecture and development through deployment on real infrastructure.
            </motion.p>

            <motion.div className="hero-role-card" variants={fadeUp}>
              <div className="hero-role-accent" aria-hidden />
              <div className="hero-role-body">
                <div className="hero-role-main">
                  <span className="hero-role-icon" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    </svg>
                  </span>
                  <div>
                    <span className="hero-role-label">Current role</span>
                    <p className="hero-role-title">
                      <strong>Software Developer</strong> at VNV LOGIXPACE
                    </p>
                  </div>
                </div>
                <span className="hero-role-badge">
                  <span className="hero-role-badge-dot" aria-hidden />
                  Open for freelance
                </span>
              </div>
            </motion.div>

            <motion.div className="hero-actions" variants={fadeUp}>
              <button type="button" className="btn-secondary hero-action-btn" onClick={() => scrollTo('projects')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                View my work
              </button>
              <button type="button" className="btn-primary hero-action-btn hero-action-btn-primary" onClick={() => scrollTo('contact')}>
                Get in touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            <motion.div className="hero-tools" variants={fadeUp}>
              <p className="hero-tools-label">Technologies I work with</p>
              <div className="hero-tags">
                {TECH_TAGS.map(tech => (
                  <span key={tech} className="hero-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={scaleIn} className="hero-profile-wrap">
            <div className="hero-profile-blob" aria-hidden />
            <div className="hero-profile-frame">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Arun Teja Vemunuri — Full Stack Developer"
                className="hero-profile-img"
                width={360}
                height={450}
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes panGrid {
          0% { background-position: 0px 0px; }
          100% { background-position: 32px 32px; }
        }
        @keyframes floatGlow {
          0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(-50%, 20px) scale(1.05); opacity: 1; }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
        }
        @media (max-width: 640px) {
          #home .hero-actions { flex-direction: column; width: 100%; }
          #home .hero-actions .hero-action-btn { width: 100%; }
          #home .hero-role-body { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}

export default Hero
