import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function sendLeadNotification(lead: {
  first_name: string
  last_name: string
  email: string
  phone?: string
  source?: string
  style_profile?: string
  film_stock_match?: string
  quiz_answers?: Record<string, string>
}) {
  const resend = getResend()
  await resend.emails.send({
    from: 'iviejo photo <noreply@iviejophoto.com>',
    to: process.env.PHOTOGRAPHER_EMAIL!,
    subject: `new lead: ${lead.first_name} ${lead.last_name} — ${lead.style_profile ?? 'quiz'}`,
    html: `
      <div style="font-family: monospace; color: #1A1714; background: #F6F2EC; padding: 32px; max-width: 600px;">
        <p style="font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B655C;">new lead via quiz</p>
        <h2 style="font-family: serif; font-weight: 300; font-size: 32px; margin: 16px 0;">${lead.first_name} ${lead.last_name}</h2>
        <hr style="border: 0; border-top: 1px solid #C9C2B8; margin: 16px 0;" />
        <p><strong>email:</strong> ${lead.email}</p>
        ${lead.phone ? `<p><strong>phone:</strong> ${lead.phone}</p>` : ''}
        ${lead.source ? `<p><strong>source:</strong> ${lead.source}</p>` : ''}
        <p><strong>style match:</strong> ${lead.style_profile ?? 'unknown'}</p>
        <p><strong>visual look:</strong> ${lead.film_stock_match ?? 'unknown'}</p>
        ${lead.quiz_answers ? `<pre style="background: #ECE5DA; padding: 16px; font-size: 12px;">${JSON.stringify(lead.quiz_answers, null, 2)}</pre>` : ''}
      </div>
    `,
  })
}

export async function sendLeadConfirmation(lead: {
  first_name: string
  email: string
  style_profile?: string
  film_stock_match?: string
}) {
  const resend = getResend()
  const filmStock = lead.film_stock_match ?? 'Kodak Portra 400'
  const profile = lead.style_profile ?? 'The Portra Portrait'

  await resend.emails.send({
    from: 'iviejo photo <noreply@iviejophoto.com>',
    to: lead.email,
    subject: `your session match — ${profile}`,
    html: `
      <div style="font-family: 'Inter Tight', Arial, sans-serif; color: #3A352F; background: #F6F2EC; padding: 40px; max-width: 560px;">
        <p style="font-family: monospace; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B655C;">iviejo photo</p>
        <h1 style="font-family: Georgia, serif; font-weight: 300; font-size: 36px; line-height: 1.05; letter-spacing: -0.015em; margin: 20px 0; color: #1A1714;">
          hey ${lead.first_name}.
        </h1>
        <p style="font-size: 17px; line-height: 1.55; margin-bottom: 16px;">
          your session match is <strong>${profile}</strong> — edited in the <strong>${filmStock}</strong> look.
        </p>
        <p style="font-size: 17px; line-height: 1.55; margin-bottom: 16px;">
          we shoot digital with analog soul — every image edited by hand. we'll be in touch within 48 hours to talk through what that looks like for your session.
        </p>
        <p style="font-size: 17px; line-height: 1.55; margin-bottom: 32px;">
          if you want to get things moving sooner, you're welcome to book a free 15-minute call at <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL}" style="color: #2F4A36;">${process.env.NEXT_PUBLIC_CALENDLY_URL}</a>.
        </p>
        <hr style="border: 0; border-top: 1px solid #C9C2B8; margin: 24px 0;" />
        <p style="font-family: monospace; font-size: 11px; color: #6B655C;">cinematic digital photography with analog-inspired editing.</p>
      </div>
    `,
  })
}
