import { SOCIAL_LINKS } from '../data/constants'

const Footer = () => {
  const year = new Date().getFullYear()
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid var(--border-light)' }}>
      <div className="container-xl" style={{ padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          {/* Logo */}
          <a href="#home" onClick={e => { e.preventDefault(); scrollTo('home') }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8, background: 'var(--brand-gradient)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>A</div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
              Arun<span style={{ color: 'var(--coral)' }}>.</span>dev
            </span>
          </a>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: 4 }}>
            {['about', 'projects', 'skills', 'experience', 'contact'].map(id => (
              <button key={id} onClick={() => scrollTo(id)}
                style={{
                  padding: '6px 12px', background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.875rem', color: 'var(--text-muted)', borderRadius: 6, transition: 'all 0.15s ease',
                  textTransform: 'capitalize',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; (e.currentTarget as HTMLElement).style.background = 'var(--bg-muted)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.background = 'none' }}
              >
                {id === 'about' ? 'Services' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Socials + copyright */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {[
              { href: SOCIAL_LINKS.github, label: 'GitHub', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg> },
              { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg> },
              { href: SOCIAL_LINKS.email, label: 'Email', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg> },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={s.label}
                style={{
                  width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border-light)',
                  background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--coral)'; (e.currentTarget as HTMLElement).style.color = 'var(--coral)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: 'var(--bg-muted)', margin: '24px 0' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-faint)' }}>
            © {year} Arun Teja Vemunuri. All rights reserved.
          </p>
          <button onClick={() => scrollTo('home')}
            style={{
              display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none',
              cursor: 'pointer', fontSize: '0.8125rem', color: 'var(--text-faint)', transition: 'color 0.15s ease',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--coral)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
