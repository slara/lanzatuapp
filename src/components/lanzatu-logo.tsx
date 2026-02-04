import { clsx } from 'clsx'

export function LanzatuLogo({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 opacity-20 blur-md" />
        <RocketIcon className="relative h-8 w-8 text-cyan-400" />
      </div>
      <span className="text-xl font-semibold tracking-tight text-white">
        lanzatu<span className="text-gradient-cyber">.app</span>
      </span>
    </div>
  )
}

export function LanzatuMark({ className }: { className?: string }) {
  return <RocketIcon className={clsx('text-cyan-400', className)} />
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
