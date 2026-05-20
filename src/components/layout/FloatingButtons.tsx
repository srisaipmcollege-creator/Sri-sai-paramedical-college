'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, ArrowUp, Phone } from 'lucide-react';
import { site } from '@/lib/site';

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waNumber = site.whatsapp.replace(/\D/g, '');

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)] max-w-[calc(100vw-2rem)]">
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                key="wa"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                href={`https://wa.me/${waNumber}?text=Hi%20Sri%20Sai%20Paramedical%20College%20-%20I%27d%20like%20to%20know%20more%20about%20admissions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-soft hover:shadow-glow"
              >
                <span className="grid place-items-center h-7 w-7 rounded-full bg-white/20">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">WhatsApp</span>
              </motion.a>
              <motion.a
                key="call"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ delay: 0.05 }}
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 rounded-full bg-ink text-white dark:bg-white dark:text-ink pl-4 pr-5 py-3 shadow-soft"
              >
                <span className="grid place-items-center h-7 w-7 rounded-full bg-white/20 dark:bg-ink/20">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">Call Now</span>
              </motion.a>
              <motion.div
                key="apply"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/apply"
                  className="flex items-center gap-3 rounded-full bg-gradient-brand text-white pl-4 pr-5 py-3 shadow-soft hover:shadow-glow"
                >
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-white/20">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">Apply Now</span>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Quick actions"
          className="relative grid place-items-center h-14 w-14 rounded-full bg-gradient-brand text-white shadow-soft hover:shadow-glow"
        >
          <span className="absolute inset-0 rounded-full bg-brand-500/40 animate-pulse-ring" />
          <motion.span animate={{ rotate: open ? 45 : 0 }} className="relative">
            <Sparkles className="h-5 w-5" />
          </motion.span>
        </button>

        <AnimatePresence>
          {visible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="grid place-items-center h-11 w-11 rounded-full glass-strong shadow-soft"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
