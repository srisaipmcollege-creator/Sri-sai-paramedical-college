'use client';

import { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const base =
  'w-full rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 px-4 py-3 text-sm text-ink dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all';

export function Input({ label, className, ...rest }: { label?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      {label && <span className="block mb-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>}
      <input className={cn(base, className)} {...rest} />
    </label>
  );
}

export function Textarea({ label, className, ...rest }: { label?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      {label && <span className="block mb-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>}
      <textarea rows={4} className={cn(base, 'resize-none', className)} {...rest} />
    </label>
  );
}

export function Select({
  label,
  className,
  children,
  ...rest
}: { label?: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      {label && <span className="block mb-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>}
      <select className={cn(base, 'appearance-none pr-10', className)} {...rest}>
        {children}
      </select>
    </label>
  );
}
