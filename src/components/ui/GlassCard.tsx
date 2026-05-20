'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  as?: 'div' | 'article' | 'section';
};

export function GlassCard({ children, className, glow = true, as = 'div' }: Props) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'relative overflow-hidden rounded-3xl glass p-6 transition-all duration-500',
        glow && 'hover:shadow-soft hover:-translate-y-1',
        className,
      )}
    >
      {glow && (
        <span className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand-500/0 via-brand-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      {children}
    </Tag>
  );
}
