import { clsx } from 'clsx'

export function LanzatuLogo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'dark' }) {
  const textColor = variant === 'dark' ? 'text-[#FBF8F1]' : 'text-[#1A1714]'
  const accentColor = variant === 'dark' ? 'text-[#C9A962]' : 'text-[#C9A962]'
  const iconStroke = variant === 'dark' ? '#C9A962' : '#1A1714'

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <div className="relative">
        {/* Decorative diamond shape */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="relative">
          {/* Outer diamond */}
          <path
            d="M16 2L30 16L16 30L2 16L16 2Z"
            stroke={iconStroke}
            strokeWidth="1.5"
            fill="none"
          />
          {/* Inner diamond with gold fill */}
          <path
            d="M16 8L24 16L16 24L8 16L16 8Z"
            fill="#C9A962"
            fillOpacity="0.15"
            stroke="#C9A962"
            strokeWidth="1"
          />
          {/* Center dot */}
          <circle cx="16" cy="16" r="2" fill="#C9A962" />
        </svg>
      </div>
      <div className="flex items-baseline">
        <span className={clsx('font-serif text-xl tracking-tight', textColor)}>
          lanzatu
        </span>
        <span className={clsx('font-serif text-xl tracking-tight', accentColor)}>
          .app
        </span>
      </div>
    </div>
  )
}

export function LanzatuMark({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'dark' }) {
  const iconStroke = variant === 'dark' ? '#C9A962' : '#1A1714'

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M16 2L30 16L16 30L2 16L16 2Z"
        stroke={iconStroke}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 8L24 16L16 24L8 16L16 8Z"
        fill="#C9A962"
        fillOpacity="0.15"
        stroke="#C9A962"
        strokeWidth="1"
      />
      <circle cx="16" cy="16" r="2" fill="#C9A962" />
    </svg>
  )
}
