'use client';

import Link from 'next/link';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="relative grid place-items-center h-10 w-10 rounded-2xl bg-gradient-brand text-white shadow-soft overflow-hidden">
        <span className="absolute inset-0 bg-gradient-sheen -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <svg viewBox="0 0 24 24" className="h-5 w-5 relative" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z" opacity="0.3" />
          <path d="M3 12h4l2-3 3 6 2-3h7" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-heading font-bold text-base tracking-tight">Sri Sai</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Paramedical
          </span>
        </span>
      )}
    </Link>
  );
}
