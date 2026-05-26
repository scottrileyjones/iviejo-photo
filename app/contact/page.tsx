'use client'

import { useState, FormEvent } from 'react'
import { Field, SelectField, TextareaField } from '@/components/ui/Field'
import { CalendlyInline } from '@/components/shared/CalendlyEmbed'
import AnimateIn from '@/components/shared/AnimateIn'

const sessionOptions = [
  { value: 'couple', label: 'couple session' },
  { value: 'portrait', label: 'portrait' },
  { value: 'family', label: 'family' },
  { value: 'graduation', label: 'graduation / milestone' },
  { value: 'event', label: 'event' },
  { value: 'other', label: 'other' },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    session_type: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    // For now, simulate success — wire to /api/leads or a contact endpoint
    setTimeout(() => { setSent(true); setLoading(false) }, 800)
  }

  return (
    <div style={{ padding: '80px 0 120px', backgroundColor: 'var(--bone)' }}>
      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <AnimateIn>
            <div>
              <h1 className="t-h1" style={{ marginBottom: 16 }}>let&apos;s talk.</h1>
              <p className="t-body" style={{ marginBottom: 48 }}>
                we respond personally to every message. expect to hear from us within 48 hours.
              </p>

              {sent ? (
                <div>
                  <h2 className="t-h3">message received.</h2>
                  <p className="t-body" style={{ marginTop: 16 }}>
                    we&apos;ll be in touch within 48 hours. in the meantime, feel free to browse the work.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                  <Field
                    label="name *"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Field
                    label="email *"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <Field
                    label="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <SelectField
                    label="session type"
                    options={sessionOptions}
                    value={form.session_type}
                    onChange={(e) => setForm({ ...form, session_type: e.target.value })}
                  />
                  <TextareaField
                    label="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ alignSelf: 'flex-start' }}
                  >
                    {loading ? 'sending...' : 'send'}
                  </button>
                </form>
              )}

              <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--putty)' }}>
                <p className="t-eyebrow" style={{ marginBottom: 16 }}>follow</p>
                <a
                  href="https://instagram.com/iviejophoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link"
                  style={{ display: 'block', marginBottom: 12 }}
                >
                  instagram
                </a>
                <a
                  href="https://tiktok.com/@iviejophoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-link"
                  style={{ display: 'block' }}
                >
                  tiktok
                </a>
                <p className="t-caption" style={{ marginTop: 32 }}>
                  cinematic digital photography with analog-inspired editing.
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={120}>
            <div>
              <p className="t-eyebrow" style={{ marginBottom: 24 }}>or book a call directly</p>
              <CalendlyInline />
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
