import Image from 'next/image'

interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'nav'
  variant?: 'dark' | 'light'
}

const heightMap: Record<NonNullable<WordmarkProps['size']>, number> = {
  nav: 44,
  sm: 36,
  md: 56,
  lg: 120,
}

export default function Wordmark({ size = 'md', variant = 'dark' }: WordmarkProps) {
  const h = heightMap[size]
  const src = variant === 'light' ? '/logo-iviejo-light.png' : '/logo-iviejo.png'

  return (
    <Image
      src={src}
      alt="iviejo photo"
      width={1200}
      height={480}
      style={{ height: h, width: 'auto' }}
      priority={size === 'nav'}
    />
  )
}
