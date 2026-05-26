'use client'

import { useState, FormEvent } from 'react'
import { QuizAnswers, StyleProfile } from '@/types'
import { Field, SelectField } from '@/components/ui/Field'

interface Props {
  answers: QuizAnswers
  profile: StyleProfile
  onSubmit: () => void
  progress: number
}

const sourceOptions = [
  { value: 'instagram', label: 'instagram' },
  { value: 'tiktok', label: 'tiktok' },
  { value: 'google', label: 'google' },
  { value: 'referral', label: 'referral' },
  { value: 'other', label: 'other' },
]

export default function LeadCaptureForm({ answers, profile, onSubmit, progress }: Props) {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    source: '',
    opt_in: true,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          quiz_answers: answers,
          style_profile: profile.name,
          film_stock_match: profile.film_stock,
        }),
      })

      if (!res.ok) throw new Error('something went wrong')
      onSubmit()
    } catch {
      setError('something went wrong. please try again.')
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bone)',
      }}
    >
      {/* Progress */}
      <div style={{ height: 2, backgroundColor: 'var(--putty)', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progress * 100}%`,
            backgroundColor: 'var(--forest)',
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: 480 }}>
          <h2 className="t-h1" style={{ marginBottom: 16 }}>one last thing.</h2>
          <p className="t-body" style={{ marginBottom: 48 }}>
            where should we send your session match? we&apos;ll reach out personally.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
              <Field
                label="first name *"
                type="text"
                required
                value={form.first_name}
                onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              />
              <Field
                label="last name *"
                type="text"
                required
                value={form.last_name}
                onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              />
            </div>

            <div style={{ marginBottom: 32 }}>
              <Field
                label="email *"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div style={{ marginBottom: 32 }}>
              <Field
                label="phone — preferred for a quick text?"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div style={{ marginBottom: 32 }}>
              <SelectField
                label="how did you find us?"
                options={sourceOptions}
                value={form.source}
                onChange={(e) => setForm({ ...form, source: e.target.value })}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 40 }}>
              <input
                type="checkbox"
                id="opt_in"
                checked={form.opt_in}
                onChange={(e) => setForm({ ...form, opt_in: e.target.checked })}
                style={{ marginTop: 3, cursor: 'pointer', accentColor: 'var(--forest)' }}
              />
              <label htmlFor="opt_in" className="t-body" style={{ fontSize: 14, cursor: 'pointer' }}>
                yes, i&apos;d love to be contacted about booking
              </label>
            </div>

            {error && (
              <p className="t-caption" style={{ color: '#8B3A3A', marginBottom: 16 }}>{error}</p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {loading ? 'sending...' : 'see my match'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
