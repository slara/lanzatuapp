'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-white/5">
      {items.map((item, index) => (
        <Disclosure as="div" key={index} className="py-6">
          {({ open }) => (
            <>
              <DisclosureButton className="group flex w-full items-start justify-between text-left">
                <span className="text-base font-medium text-white pr-4 transition-colors group-hover:text-cyan-400">
                  {item.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={`size-5 text-gray-500 transition-all duration-200 group-hover:text-cyan-400 ${
                      open ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </span>
              </DisclosureButton>
              <AnimatePresence initial={false}>
                {open && (
                  <DisclosurePanel static as="div">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-base text-gray-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  </DisclosurePanel>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
