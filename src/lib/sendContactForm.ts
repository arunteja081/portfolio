import type { ContactFormData } from './validateContactForm'

export type { ContactFormData } from './validateContactForm'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

const thankYouMessage = (name: string) =>
  `Hi ${name},

Thank you for reaching out through my portfolio. I received your project brief and will review it shortly.

I aim to reply within 24 hours with next steps or any questions.

Best regards,
Arun Teja Vemunuri`

import { validateContactForm, hasContactFormErrors, CONTACT_SERVICES } from './validateContactForm'

export async function sendContactForm(data: ContactFormData): Promise<void> {
  const validationErrors = validateContactForm(data, CONTACT_SERVICES)
  if (hasContactFormErrors(validationErrors)) {
    throw new Error(Object.values(validationErrors)[0])
  }

  if (!ACCESS_KEY) {
    throw new Error(
      'Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file (get a free key at https://web3forms.com).',
    )
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      name: data.name,
      email: data.email,
      subject: `New project brief: ${data.service}`,
      message: [
        `Service: ${data.service}`,
        '',
        'Project details:',
        data.message,
      ].join('\n'),
      from_name: data.name,
      autoresponse: thankYouMessage(data.name),
    }),
  })

  const result = (await response.json()) as { success?: boolean; message?: string }

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? 'Failed to send message. Please try again.')
  }
}
