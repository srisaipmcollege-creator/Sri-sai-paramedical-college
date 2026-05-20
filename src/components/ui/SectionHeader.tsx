'use client';

import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, highlight, subtitle, center, className }: Props) {
  return (
    <div className={cn('max-w-3xl', center && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Reveal>
          <span className="section-eyebrow">
            <span className="h-1 w-6 rounded-full bg-gradient-brand" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="section-title mt-4">
          {title}{' '}
          {highlight && (
            <span className="text-gradient animate-gradient-pan">{highlight}</span>
          )}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
