import Image from 'next/image'

interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'nav'
  variant?: 'dark' | 'light'
}

// logo-iviejo.png is 1200x480 (aspect ratio 2.5)
const heights: Record<string, number> = { sm: 28, nav: 32, md: 40, lg: 80 }

export default function Wordmark({ size = 'md', variant = 'dark' }: WordmarkProps) {
  const h = heights[size]
  const w = Math.round(h * 2.5)
  const src = variant === 'light' ? '/logo-iviejo-light.png' : '/logo-iviejo.png'

  return (
    <Image
      src={src}
      alt="iviejo photo"
      width={w}
      height={h}
      style={{ display: 'block' }}
      priority={size === 'nav'}
    />
  )
}
