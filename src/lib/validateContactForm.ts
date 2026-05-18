export interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

export const CONTACT_SERVICES = [
  'Website / Web App Development',
  'Mobile App (iOS & Android)',
  'AI Tool / Business Automation',
  'SEO & Digital Marketing',
  'Business Dashboard / CRM',
  'Startup MVP',
  'Other / Not sure yet',
] as const

export type ContactFormField = keyof ContactFormData
export type ContactFormErrors = Partial<Record<ContactFormField, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const NAME_RE = /^[\p{L}\p{M}'.\-\s]{2,80}$/u

const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 20, max: 2000 },
} as const

export function validateContactForm(
  data: ContactFormData,
  allowedServices: readonly string[],
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const name = data.name.trim()
  if (!name) {
    errors.name = 'Full name is required.'
  } else if (name.length < LIMITS.name.min) {
    errors.name = `Name must be at least ${LIMITS.name.min} characters.`
  } else if (name.length > LIMITS.name.max) {
    errors.name = `Name must be ${LIMITS.name.max} characters or less.`
  } else if (!NAME_RE.test(name)) {
    errors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes.'
  }

  const email = data.email.trim().toLowerCase()
  if (!email) {
    errors.email = 'Email is required.'
  } else if (email.length > LIMITS.email.max) {
    errors.email = 'Email is too long.'
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address (e.g. john@company.com).'
  }

  if (!data.service) {
    errors.service = 'Please select a service.'
  } else if (!allowedServices.includes(data.service)) {
    errors.service = 'Please choose a valid service from the list.'
  }

  const message = data.message.trim()
  if (!message) {
    errors.message = 'Project details are required.'
  } else if (message.length < LIMITS.message.min) {
    errors.message = `Please add at least ${LIMITS.message.min} characters about your project.`
  } else if (message.length > LIMITS.message.max) {
    errors.message = `Project details must be ${LIMITS.message.max} characters or less.`
  }

  return errors
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}

export const CONTACT_FORM_LIMITS = LIMITS
