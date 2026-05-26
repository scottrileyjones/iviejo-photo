'use client'

interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button
      type="button"
      className={`chip ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
