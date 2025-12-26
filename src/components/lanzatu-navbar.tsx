'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { LanzatuLogo } from './lanzatu-logo'
import { Link } from './link'

const links = [
  { href: '#proceso', label: 'Proceso' },
  { href: '#entregables', label: 'Entregables' },
  { href: '#precio', label: 'Precio' },
  { href: '#faq', label: 'Preguntas' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden items-center gap-8 lg:flex">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          {label}
        </Link>
      ))}
      <Link
        href="#contacto"
        className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Agendar llamada
      </Link>
    </nav>
  )
}

function MobileNavButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton
      className="flex size-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
      aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
    >
      {open ? <XMarkIcon className="size-6" /> : <Bars2Icon className="size-6" />}
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-4 border-t border-gray-200 py-6">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: linkIndex * 0.05,
            }}
            key={href}
          >
            <Link
              href={href}
              className="block text-base font-medium text-gray-600 hover:text-gray-900"
            >
              {label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: links.length * 0.05,
          }}
        >
          <Link
            href="#contacto"
            className="inline-block rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white"
          >
            Agendar llamada
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
