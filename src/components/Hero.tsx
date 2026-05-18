import { motion, type Variants } from 'framer-motion'
import { SOCIAL_LINKS } from '../data/constants'
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

const STATS = [
  { value: '20+', label: 'Projects' },
  { value: '100%', label: 'Satisfaction' },
  { value: '3+', label: 'Years Exp.' },
]

const PARTICLES = [
  { top: '18%', left: '8%', size: 6, delay: 0, color: 'rgba(255,154,134,0.35)' },
  { top: '28%', right: '12%', size: 8, delay: 1.2, color: 'rgba(59,130,246,0.25)' },
  { top: '55%', left: '15%', size: 5, delay: 2.4, color: 'rgba(16,185,129,0.3)' },
  { top: '40%', right: '18%', size: 7, delay: 0.8, color: 'rgba(255,154,134,0.2)' },
  { top: '70%', left: '6%', size: 4, delay: 1.8, color: 'rgba(255,154,134,0.25)' },
  { top: '22%', left: '42%', size: 5, delay: 3, color: 'rgba(255,154,134,0.15)' },
]

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
        overflow: 'hidden',
        background: 'var(--bg-page)',
        borderBottom: '1px solid var(--border-light)',
        paddingTop: 64,
        paddingBottom: 48,
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

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="hero-particle z-0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
          style={{
            top: p.top,
            left: 'left' in p ? p.left : undefined,
            right: 'right' in p ? p.right : undefined,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${5 + i * 0.8}s`,
          }}
        />
      ))}

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-40 z-0 opacity-60"
        fill="var(--coral)"
      />

      {/* Content */}
      <motion.div
        className="container-xl"
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 40,
          paddingBottom: 16,
          marginTop: 36,
        }}
      >
        {/* Availability badge */}
        <motion.div variants={scaleIn} style={{ marginBottom: 12 }}>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'rgba(236,253,245,0.9)',
              border: '1px solid rgba(167,243,208,0.5)',
              backdropFilter: 'blur(8px)',
              fontSize: '11px',
              fontWeight: 700,
              color: '#047857',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: '#34D399',
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                  opacity: 0.75,
                }}
              />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10B981',
                }}
              />
            </span>
            Available for Freelance Work
          </motion.div>
        </motion.div>

        {/* Headline — line by line */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          style={{ width: '100%', marginBottom: 10 }}
        >
          <motion.h1
            className="font-display hero-headline"
            style={{
              width: '100%',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            <motion.span className="hero-headline-line" variants={fadeUp} style={{ display: 'block' }}>
              I build digital products that
            </motion.span>
            <motion.span
              className="hero-headline-line"
              variants={fadeUp}
              style={{ display: 'block', marginTop: 2 }}
            >
              drive business{' '}
              <motion.span
                className="text-gradient hero-gradient-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.6, ease }}
              >
                growth.
              </motion.span>
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ width: '100%', maxWidth: 640, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              width: '100%',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            Hi, I'm{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Arun Teja Vemunuri</strong>
            {' '}— a freelance Full Stack Engineer who turns complex problems into elegant, scalable solutions.
          </motion.p>

          {/* Tech tags — stagger */}
          <motion.div
            variants={fadeUp}
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 14,
            }}
          >
            {TECH_TAGS.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.45, ease }}
                whileHover={{
                  y: -3,
                  borderColor: 'var(--peach)',
                  color: 'var(--coral)',
                  boxShadow: '0 4px 12px -2px rgba(255, 154, 134, 0.15)',
                }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(226,232,240,0.9)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  cursor: 'default',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA pill */}
          <motion.div
            variants={fadeUp}
            className="hero-cta-pill"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 18,
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: 6,
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.8)',
              borderRadius: 100,
              boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.5)',
            }}
          >
            <motion.button
              onClick={() => scrollTo('contact')}
              className="hero-cta-glow"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '100px',
                background: 'var(--brand-gradient)',
                color: '#fff',
                fontSize: '0.9375rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
            >
              Hire Me
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.button>

            <motion.button
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(241,245,249,0.9)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '100px',
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
            >
              Explore Projects
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              marginBottom: 24,
            }}
          >
            {[
              {
                href: SOCIAL_LINKS.github,
                label: 'GitHub',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                ),
              },
              {
                href: SOCIAL_LINKS.linkedin,
                label: 'LinkedIn',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                ),
              },
              {
                href: SOCIAL_LINKS.email,
                label: 'Email',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 7L2 7" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={i < 2 ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.1, duration: 0.4 }}
                whileHover={{
                  y: -3,
                  borderColor: 'var(--peach)',
                  color: 'var(--coral)',
                  boxShadow: '0 4px 12px -2px rgba(255, 154, 134, 0.15)',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  background: '#fff',
                  color: 'var(--text-muted)',
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            style={{
              width: '100%',
              maxWidth: 640,
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center',
              padding: '24px 0 0',
              borderTop: '1px solid var(--border-light)',
            }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.12, duration: 0.5, ease }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  flex: '1 1 0',
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                  padding: '0 12px',
                  position: 'relative',
                  cursor: 'default',
                }}
              >
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.12, type: 'spring', stiffness: 260, damping: 16 }}
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </motion.span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--text-faint)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  {stat.label}
                </span>
                {i < 2 && (
                  <span
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '1px',
                      height: '36px',
                      background: 'var(--border-light)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.button
        type="button"
        className="hero-scroll-hint"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-faint)',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.button>

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
        #home .hero-headline {
          font-size: clamp(1.375rem, 2.8vw + 0.65rem, 3.25rem);
          line-height: 1.05;
        }
        #home .hero-headline-line {
          display: block;
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          #home .hero-cta-pill { flex-direction: column; border-radius: 20px; width: 100%; max-width: 280px; }
          #home .hero-cta-pill button { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}

export default Hero
