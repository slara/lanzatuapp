'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { motion } from 'framer-motion'
import { LanzatuLogo } from './lanzatu-logo'
import { Link } from './link'

const links = [
  { href: '#proceso', label: 'Proceso' },
  { href: '#entregables', label: 'Entregables' },
  { href: '#precio', label: 'Precio' },
  { href: '#faq', label: 'Preguntas' },
]

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 18H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DesktopNav() {
  return (
    <nav className="relative hidden items-center gap-10 lg:flex">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="group relative text-sm font-medium tracking-wide text-[#635B52] transition-colors hover:text-[#1A1714]"
        >
          {label}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A962] transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
      <Link
        href="https://wa.me/56993289547?text=Hola%20👋%20Quiero%20saber%20más%20sobre%20cómo%20lanzar%20mi%20producto"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-[#1A1714] px-5 py-2.5 text-sm font-medium text-[#FBF8F1] transition-all hover:bg-[#2D2822] hover:shadow-lg"
      >
        Conversemos
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </nav>
  )
}

function MobileNavButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton
      className="flex size-10 items-center justify-center rounded-lg text-[#1A1714] transition-colors hover:bg-[#1A1714]/5 lg:hidden"
      aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
    >
      {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-1 border-t border-[#1A1714]/10 py-6">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
              delay: linkIndex * 0.05,
            }}
            key={href}
          >
            <Link
              href={href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-[#635B52] transition-colors hover:bg-[#1A1714]/5 hover:text-[#1A1714]"
            >
              {label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            delay: links.length * 0.05,
          }}
          className="mt-4 px-4"
        >
          <Link
            href="https://wa.me/56993289547?text=Hola%20👋%20Quiero%20saber%20más%20sobre%20cómo%20lanzar%20mi%20producto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1A1714] px-5 py-3 text-sm font-medium text-[#FBF8F1]"
          >
            Conversemos
            <ArrowRightIcon className="size-4" />
          </Link>
        </motion.div>
      </div>
    </DisclosurePanel>
  )
}

export function LanzatuNavbar() {
  return (
    <Disclosure as="header" className="relative z-50">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between py-6">
            <Link href="/" title="Inicio">
              <LanzatuLogo />
            </Link>
            <DesktopNav />
            <MobileNavButton open={open} />
          </div>
          <MobileNav />
        </>
      )}
    </Disclosure>
  )
}
