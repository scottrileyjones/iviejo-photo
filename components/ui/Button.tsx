'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'accent' | 'outline'
  href?: string
  onClick?: () => void
  children: ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  type = 'button',
  disabled,
  className = '',
}: ButtonProps) {
  const cls = `btn-${variant} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
