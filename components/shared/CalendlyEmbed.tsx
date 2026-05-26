'use client'

import { useEffect } from 'react'

interface CalendlyInlineProps {
  url?: string
}

export function CalendlyInline({ url }: CalendlyInlineProps) {
  const calendlyUrl = url ?? process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/iviejo/15min'

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={calendlyUrl}
      style={{ minWidth: 320, height: 700 }}
    />
  )
}

interface CalendlyButtonProps {
  url?: string
  label?: string
  className?: string
}

export function CalendlyButton({ url, label = 'book a free 15-min call', className = 'btn-accent' }: CalendlyButtonProps) {
  const calendlyUrl = url ?? process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/iviejo/15min'

  const open = () => {
    if (typeof window !== 'undefined' && (window as unknown as { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly) {
      (window as unknown as { Calendly: { initPopupWidget: (opts: { url: string }) => void } }).Calendly.initPopupWidget({ url: calendlyUrl })
    } else {
      window.open(calendlyUrl, '_blank')
    }
  }

  return (
    <button type="button" className={className} onClick={open}>
      {label}
    </button>
  )
}
