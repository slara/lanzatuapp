'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

function PlusIcon({ className, open }: { className?: string; open?: boolean }) {
  return (
    <div className={`relative size-5 ${className}`}>
      {/* Horizontal line */}
      <span
        className={`absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-current transition-all duration-300 ${
          open ? 'bg-[#C9A962]' : ''
        }`}
      />
      {/* Vertical line */}
      <span
        className={`absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-current transition-all duration-300 ${
          open ? 'rotate-90 opacity-0' : ''
        }`}
      />
    </div>
  )
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <Disclosure as="div" key={index}>
          {({ open }) => (
            <div className={`border-b border-[#1A1714]/10 ${index === 0 ? 'border-t' : ''}`}>
              <DisclosureButton className="group flex w-full items-center justify-between py-6 text-left">
                <span className={`pr-8 font-serif text-lg transition-colors sm:text-xl ${
                  open ? 'text-[#C9A962]' : 'text-[#1A1714] group-hover:text-[#C9A962]'
                }`}>
                  {item.question}
                </span>
                <PlusIcon
                  className={`shrink-0 transition-colors ${
                    open ? 'text-[#C9A962]' : 'text-[#857C71] group-hover:text-[#C9A962]'
                  }`}
                  open={open}
                />
              </DisclosureButton>
              <AnimatePresence initial={false}>
                {open && (
                  <DisclosurePanel static as="div">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-12">
                        <p className="text-base leading-relaxed text-[#635B52]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  </DisclosurePanel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
