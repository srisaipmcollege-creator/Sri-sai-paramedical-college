'use client';

import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  color: string;
};

export function TestimonialCard({ name, role, quote, avatar, color }: Props) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl glass-strong p-7 md:p-8">
      <div
        className={cn(
          'absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-30 bg-gradient-to-br',
          color,
        )}
      />
      <Quote className="h-8 w-8 text-brand-500" />
      <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/90 dark:text-white/90">
        “{quote}”
      </p>
      <div className="mt-7 flex items-center gap-3">
        <div
          className={cn(
            'h-12 w-12 rounded-full grid place-items-center font-heading font-semibold text-white shadow-soft bg-gradient-to-br',
            color,
          )}
        >
          {avatar}
        </div>
        <div>
          <div className="font-heading font-semibold text-sm">{name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{role}</div>
        </div>
      </div>
    </div>
  );
}
