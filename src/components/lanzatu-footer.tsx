import { Container } from './container'
import { LanzatuLogo } from './lanzatu-logo'
import { Link } from './link'

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function DiamondIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#C9A962]">
      <path d="M6 0L12 6L6 12L0 6L6 0Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M6 2L10 6L6 10L2 6L6 2Z" fill="currentColor" />
    </svg>
  )
}

export function LanzatuFooter() {
  return (
    <footer className="relative border-t border-[#1A1714]/10 bg-[#1A1714]">
      {/* Decorative top line */}
      <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 -translate-y-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />

      <Container>
        <div className="py-16">
          {/* Main footer content */}
          <div className="flex flex-col items-center gap-10">
            {/* Logo */}
            <LanzatuLogo variant="dark" />

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-8">
              <Link
                href="#proceso"
                className="text-sm text-[#A69E93] transition-colors hover:text-[#FBF8F1]"
              >
                Proceso
              </Link>
              <DiamondIcon />
              <Link
                href="#entregables"
                className="text-sm text-[#A69E93] transition-colors hover:text-[#FBF8F1]"
              >
                Entregables
              </Link>
              <DiamondIcon />
              <Link
                href="#precio"
                className="text-sm text-[#A69E93] transition-colors hover:text-[#FBF8F1]"
              >
                Precio
              </Link>
              <DiamondIcon />
              <Link
                href="#faq"
                className="text-sm text-[#A69E93] transition-colors hover:text-[#FBF8F1]"
              >
                Preguntas
              </Link>
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-[#3D372F] text-[#A69E93] transition-all hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                <SocialIconLinkedIn className="size-4" />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                aria-label="X (Twitter)"
                className="flex size-10 items-center justify-center rounded-full border border-[#3D372F] text-[#A69E93] transition-all hover:border-[#C9A962] hover:text-[#C9A962]"
              >
                <SocialIconX className="size-4" />
              </Link>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-[#3D372F] pt-8 sm:flex-row sm:justify-between">
            <p className="text-sm text-[#857C71]">
              &copy; {new Date().getFullYear()} lanzatu.app — By ModoAutomatico
            </p>
            <div className="flex gap-6 text-sm text-[#857C71]">
              <Link href="#" className="transition-colors hover:text-[#C9A962]">
                Privacidad
              </Link>
              <Link href="#" className="transition-colors hover:text-[#C9A962]">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
