interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'nav'
}

export default function Wordmark({ size = 'md' }: WordmarkProps) {
  const mainSize = size === 'lg' ? 72 : size === 'nav' ? 24 : 28
  const subSize = size === 'lg' ? 26 : size === 'nav' ? 10 : 11

  return (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: 'var(--ink)',
        textDecoration: 'none',
      }}
    >
      <span style={{ fontSize: mainSize, lineHeight: 0.92 }}>iviejo</span>
      <span style={{ fontSize: subSize, letterSpacing: '-0.02em', paddingLeft: 4, marginTop: 2 }}>photo</span>
    </span>
  )
}
