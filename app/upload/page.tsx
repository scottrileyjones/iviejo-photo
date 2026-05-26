'use client'

import { useState, FormEvent, useRef } from 'react'
import { Field, SelectField, TextareaField } from '@/components/ui/Field'
import { Upload } from 'lucide-react'
import AnimateIn from '@/components/shared/AnimateIn'

const filmOptions = [
  { value: 'portra-400', label: 'Portra 400' },
  { value: 'ektar-100', label: 'Ektar 100' },
  { value: 'hp5-bw', label: 'HP5 B&W' },
  { value: 'surprise', label: 'not sure — surprise me' },
]

export default function UploadPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    film_preference: '',
    inspo_links: '',
    notes: '',
  })
  const [files, setFiles] = useState<File[]>([])
  const [dragging, setDragging] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFiles(incoming: FileList | null) {
    if (!incoming) return
    const valid = Array.from(incoming).filter(
      (f) => ['image/jpeg', 'image/png', 'image/webp'].includes(f.type) && f.size <= 20 * 1024 * 1024
    )
    setFiles((prev) => [...prev, ...valid].slice(0, 10))
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    Object.entries(form).forEach(([k, v]) => formData.append(k, v))
    files.forEach((f) => formData.append('files', f))

    try {
      await fetch('/api/upload', { method: 'POST', body: formData })
      setSent(true)
    } catch {
      // fail silently for now
    }
    setLoading(false)
  }

  return (
    <div style={{ padding: '80px 0 120px', backgroundColor: 'var(--bone)' }}>
      <div className="container-site" style={{ maxWidth: 720, margin: '0 auto' }}>
        <AnimateIn>
          <h1 className="t-h1" style={{ marginBottom: 16 }}>share your vision.</h1>
          <p className="t-body" style={{ marginBottom: 64, maxWidth: 520 }}>
            upload inspiration photos or links. the more we know about what you&apos;re drawn to,
            the better we can prepare — including choosing the right film stock for your session.
          </p>
        </AnimateIn>

        {sent ? (
          <AnimateIn>
            <div>
              <h2 className="t-h3">received.</h2>
              <p className="t-body" style={{ marginTop: 16 }}>
                we&apos;ll review your inspo and reach out within 48 hours.
              </p>
            </div>
          </AnimateIn>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Field
              label="name"
              type="text"
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

            {/* Drop zone */}
            <div>
              <label className="field-label">inspiration photos — up to 10, 20MB each</label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: `1px solid ${dragging ? 'var(--ink)' : 'var(--stone)'}`,
                  borderRadius: 'var(--r-1)',
                  padding: '48px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  cursor: 'pointer',
                  backgroundColor: dragging ? 'var(--linen)' : 'transparent',
                  transition: 'all 200ms var(--ease-out)',
                }}
              >
                <Upload size={24} strokeWidth={1.25} strokeLinecap="square" color="var(--slate)" />
                <p className="t-caption" style={{ textAlign: 'center' }}>
                  drag photos here or click to select<br />
                  jpg, png, webp — up to 10 files, 20MB each
                </p>
                {files.length > 0 && (
                  <p className="t-caption" style={{ color: 'var(--ink)' }}>
                    {files.length} file{files.length > 1 ? 's' : ''} selected
                  </p>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp"
                style={{ display: 'none' }}
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>

            <SelectField
              label="which stock draws you most?"
              options={filmOptions}
              value={form.film_preference}
              onChange={(e) => setForm({ ...form, film_preference: e.target.value })}
            />

            <TextareaField
              label="paste any inspo links (pinterest, instagram, etc.)"
              value={form.inspo_links}
              onChange={(e) => setForm({ ...form, inspo_links: e.target.value })}
              rows={3}
            />

            <TextareaField
              label="anything else we should know?"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={3}
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
      </div>
    </div>
  )
}
