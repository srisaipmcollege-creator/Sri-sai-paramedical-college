'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200/60 dark:divide-white/10 rounded-3xl glass overflow-hidden">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-4 text-left px-6 py-5 hover:bg-slate-50/60 dark:hover:bg-white/[0.03] transition-colors"
            >
              <span className="mt-1 grid place-items-center h-8 w-8 rounded-full bg-gradient-brand text-white shrink-0">
                <Plus
                  className={cn(
                    'h-4 w-4 transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                />
              </span>
              <span className="flex-1">
                <span className="block font-heading text-base sm:text-lg font-semibold text-ink dark:text-white">
                  {item.q}
                </span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-[4.5rem] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
