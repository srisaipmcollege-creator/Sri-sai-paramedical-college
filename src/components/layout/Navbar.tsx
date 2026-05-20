'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { nav } from '@/lib/site';
import { useTheme } from './ThemeProvider';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top)]',
        scrolled ? 'mt-2' : 'mt-4',
      )}
    >
      <div className="container-page">
        <nav
          className={cn(
            'flex items-center gap-3 rounded-full transition-all duration-500',
            scrolled
              ? 'glass-strong px-3 py-2 shadow-soft'
              : 'glass px-4 py-2.5',
          )}
        >
          <Logo />

          <ul className="hidden lg:flex items-center gap-1 mx-auto">
            {nav.slice(0, 8).map(item => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-colors',
                      active
                        ? 'text-brand-600 dark:text-brand-400'
                        : 'text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-brand-500/10 dark:bg-brand-400/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto lg:ml-0 flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggle}
              className="hidden sm:grid place-items-center h-9 w-9 rounded-full hover:bg-ink/5 dark:hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href="/apply"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-2.5 text-sm font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              Apply Now
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen(v => !v)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-full bg-ink/5 dark:bg-white/10"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden container-page mt-3"
          >
            <div className="glass-strong rounded-3xl p-3 shadow-soft max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain">
              <ul className="grid gap-1">
                {nav.map(item => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-2xl text-sm font-medium',
                          active
                            ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                            : 'hover:bg-ink/5 dark:hover:bg-white/10',
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3 flex items-center gap-2">
                <Link
                  href="/apply"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-brand text-white px-5 py-3 text-sm font-medium"
                >
                  Apply Now
                </Link>
                <button
                  aria-label="Toggle theme"
                  onClick={toggle}
                  className="grid place-items-center h-12 w-12 rounded-2xl bg-ink/5 dark:bg-white/10"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
