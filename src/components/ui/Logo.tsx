'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  /** Hide the wordmark text and only render the emblem. */
  compact?: boolean;
  /** Size in tailwind units (height of the emblem). */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Force-light: useful on dark hero overlays. */
  invert?: boolean;
};

const SIZES = {
  sm: { box: 'h-9 w-9', text: 'text-[10px]', name: 'text-sm' },
  md: { box: 'h-12 w-12', text: 'text-[10px]', name: 'text-base' },
  lg: { box: 'h-16 w-16', text: 'text-xs', name: 'text-lg' },
} as const;

export function Logo({ compact = false, size = 'md', className, invert = false }: Props) {
  const s = SIZES[size];

  return (
    <Link
      href="/"
      aria-label="Sri Sai Paramedical College — Home"
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <span
        className={cn(
          'relative inline-block shrink-0 transition-transform duration-300 group-hover:scale-105',
          s.box,
        )}
      >
        <Image
          src="/logo.png"
          alt="Sri Sai Paramedical College logo"
          fill
          sizes="64px"
          priority
          className={cn('object-contain', invert && 'invert brightness-150')}
        />
      </span>

      {!compact && (
        <span className="hidden xs:flex flex-col leading-none">
          <span className={cn('font-heading font-bold tracking-tight', s.name)}>
            Sri Sai
          </span>
          <span
            className={cn(
              'font-medium uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400',
              s.text,
            )}
          >
            Paramedical
          </span>
        </span>
      )}
    </Link>
  );
}
