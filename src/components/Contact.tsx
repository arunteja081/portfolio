import { useState, FormEvent, FocusEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SOCIAL_LINKS } from '../data/constants'
import { sendContactForm } from '../lib/sendContactForm'
import {
  validateContactForm,
  hasContactFormErrors,
  CONTACT_FORM_LIMITS,
  CONTACT_SERVICES,
  type ContactFormField,
  type ContactFormErrors,
} from '../lib/validateContactForm'

const emptyForm = { name: '', email: '', service: '', message: '' }

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<ContactFormField, boolean>>>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateField = (field: ContactFormField, value: string) => {
    const next = { ...form, [field]: value }
    setForm(next)
    if (touched[field]) {
      const nextErrors = validateContactForm(next, CONTACT_SERVICES)
      setErrors(prev => ({ ...prev, [field]: nextErrors[field] }))
    }
  }

  const blurField = (field: ContactFormField) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const nextErrors = validateContactForm(form, CONTACT_SERVICES)
    setErrors(prev => ({ ...prev, [field]: nextErrors[field] }))
  }

  const fieldBorder = (field: ContactFormField) =>
    touched[field] && errors[field] ? '#F87171' : '#E2E8F0'

  const focusHandlers = (field: ContactFormField) => ({
    onFocus: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.target.style.borderColor = errors[field] && touched[field] ? '#F87171' : 'var(--coral)'
      e.target.style.boxShadow = '0 0 0 3px var(--brand-focus-ring)'
    },
    onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      blurField(field)
      e.target.style.borderColor = fieldBorder(field)
      e.target.style.boxShadow = 'none'
    },
  })

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const validationErrors = validateContactForm(form, CONTACT_SERVICES)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, service: true, message: true })

    if (hasContactFormErrors(validationErrors)) return

    setSending(true)
    try {
      await sendContactForm({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        service: form.service,
        message: form.message.trim(),
      })
      setSent(true)
      setForm(emptyForm)
      setErrors({})
      setTouched({})
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', background: '#FFFFFF',
    border: '1.5px solid #E2E8F0', borderRadius: 10,
    fontSize: '0.9375rem', color: '#0F172A', outline: 'none',
    fontFamily: "'Inter', sans-serif", transition: 'all 0.15s ease',
  }

  const fieldErrorStyle: React.CSSProperties = {
    marginTop: 6, fontSize: '0.75rem', color: '#DC2626', lineHeight: 1.4,
  }

  const FieldError = ({ field }: { field: ContactFormField }) =>
    touched[field] && errors[field]
      ? <p id={`${field}-error`} role="alert" style={fieldErrorStyle}>{errors[field]}</p>
      : null

  return (
    <section id="contact" className="section" style={{ background: '#F8FAFC' }}>
      <div className="container-xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span className="badge badge-violet" style={{ marginBottom: 16 }}>Contact</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', color: '#0F172A', marginBottom: 16,
          }}>
            Start Your Project
          </h2>
          <p style={{ color: '#475569', fontSize: '1.0625rem', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Tell me about your project and I'll respond within 24 hours with a clear proposal. No commitment required.
          </p>
        </motion.div>

        <motion.div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32, maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div className="card" style={{ padding: '24px' }}>
              <h4 className="font-display" style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>
                Get in touch
              </h4>
              {[
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>,
                  label: 'Email', val: 'arunteja.techai@gmail.com', href: SOCIAL_LINKS.email,
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#0A66C2' }}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>,
                  label: 'LinkedIn', val: 'vemunuri-arun-teja', href: SOCIAL_LINKS.linkedin,
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#0F172A' }}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>,
                  label: 'GitHub', val: 'aruntejavemunuri', href: SOCIAL_LINKS.github,
                },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.label !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #F1F5F9', textDecoration: 'none' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, background: '#F8FAFC', border: '1px solid #E2E8F0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', lineHeight: 1 }}>{item.label}</div>
                    <div style={{ fontSize: '0.875rem', color: '#0F172A', fontWeight: 500, marginTop: 2 }}>{item.val}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <h4 className="font-display" style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>
                How it works
              </h4>
              {[
                { n: '1', title: 'Share your idea', desc: 'Fill the form with your project requirements.' },
                { n: '2', title: 'Free consultation', desc: 'We discuss scope, timeline & pricing.' },
                { n: '3', title: 'Build & launch', desc: 'I build it, you review, we ship 🚀' },
              ].map(step => (
                <div key={step.n} style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', background: 'var(--coral)',
                    color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{step.n}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0F172A' }}>{step.title}</div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: 2 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: '14px 18px', background: '#ECFDF5', border: '1px solid #A7F3D0',
              borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 0 3px rgba(16,185,129,0.2)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#065F46' }}>Available for projects</div>
                <div style={{ fontSize: '0.75rem', color: '#059669' }}>Replies within 24 hours</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form onSubmit={submit} noValidate className="card" style={{ padding: '32px 32px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: 6 }} htmlFor="c-name">Full Name *</label>
                  <input
                    id="c-name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    maxLength={CONTACT_FORM_LIMITS.name.max}
                    aria-invalid={!!(touched.name && errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    onChange={e => updateField('name', e.target.value)}
                    style={{ ...inputStyle, borderColor: fieldBorder('name') }}
                    {...focusHandlers('name')}
                  />
                  <FieldError field="name" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: 6 }} htmlFor="c-email">Email *</label>
                  <input
                    id="c-email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    maxLength={CONTACT_FORM_LIMITS.email.max}
                    aria-invalid={!!(touched.email && errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    onChange={e => updateField('email', e.target.value)}
                    style={{ ...inputStyle, borderColor: fieldBorder('email') }}
                    {...focusHandlers('email')}
                  />
                  <FieldError field="email" />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: 6 }} htmlFor="c-service">What do you need? *</label>
                <select
                  id="c-service"
                  value={form.service}
                  aria-invalid={!!(touched.service && errors.service)}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  onChange={e => updateField('service', e.target.value)}
                  style={{ ...inputStyle, cursor: 'pointer', borderColor: fieldBorder('service') }}
                  {...focusHandlers('service')}
                >
                  <option value="">Select a service...</option>
                  {CONTACT_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <FieldError field="service" />
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#374151' }} htmlFor="c-msg">Project Details *</label>
                  <span style={{
                    fontSize: '0.75rem',
                    color: form.message.length > CONTACT_FORM_LIMITS.message.max ? '#DC2626' : '#94A3B8',
                  }}>
                    {form.message.length}/{CONTACT_FORM_LIMITS.message.max}
                  </span>
                </div>
                <textarea
                  id="c-msg"
                  rows={5}
                  value={form.message}
                  maxLength={CONTACT_FORM_LIMITS.message.max}
                  aria-invalid={!!(touched.message && errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  onChange={e => updateField('message', e.target.value)}
                  placeholder="Describe your project — goals, users, requirements, timeline..."
                  style={{ ...inputStyle, resize: 'vertical', borderColor: fieldBorder('message') }}
                  {...focusHandlers('message')}
                />
                <FieldError field="message" />
              </div>

              {error && (
                <p role="alert" style={{
                  marginBottom: 12, padding: '10px 14px', borderRadius: 8,
                  background: '#FEF2F2', border: '1px solid #FECACA',
                  color: '#B91C1C', fontSize: '0.8125rem', lineHeight: 1.5,
                }}>
                  {error}
                </p>
              )}

              <button type="submit" className="btn-primary" disabled={sending || sent}
                style={{ width: '100%', fontSize: '1rem', padding: '14px', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
                {sent
                  ? '✅ Message sent! I\'ll reply within 24h.'
                  : sending
                    ? 'Sending...'
                    : <>
                        Send Project Brief — It's Free
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </>
                }
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94A3B8', marginTop: 12 }}>
                🔒 No spam. Your info stays private. Guaranteed reply in 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>

        <style>{`
          @media (max-width: 768px) {
            #contact .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}

export default Contact
