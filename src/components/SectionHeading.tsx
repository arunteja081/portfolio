import { ReactNode } from 'react'

interface Props {
  badge?: string
  title: string | ReactNode
  subtitle?: string
  centered?: boolean
}

const SectionHeading = ({ badge, title, subtitle, centered = true }: Props) => (
  <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: 48 }}>
    {badge && (
      <span className="badge badge-violet" style={{ marginBottom: 14, display: 'inline-flex' }}>{badge}</span>
    )}
    <h2 className="font-display" style={{
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 14,
      lineHeight: 1.15,
    }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{
        color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7,
        maxWidth: centered ? 520 : '100%',
        marginLeft: centered ? 'auto' : 0,
        marginRight: centered ? 'auto' : 0,
      }}>
        {subtitle}
      </p>
    )}
  </div>
)

export default SectionHeading
