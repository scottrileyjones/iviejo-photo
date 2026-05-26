'use client'

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: { value: string; label: string }[]
}

export function Field({ label, ...props }: FieldProps) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input className="input" {...props} />
    </div>
  )
}

export function TextareaField({ label, ...props }: TextareaFieldProps) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <textarea
        className="input"
        style={{ resize: 'vertical', minHeight: 80 }}
        {...props}
      />
    </div>
  )
}

export function SelectField({ label, options, ...props }: SelectFieldProps) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <select
        className="input"
        style={{ appearance: 'none', cursor: 'pointer' }}
        {...props}
      >
        <option value="">select</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
