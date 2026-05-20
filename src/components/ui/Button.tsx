'use client';

import Link from 'next/link';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'gold';
type Size = 'sm' | 'md' | 'lg';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'relative bg-gradient-brand text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5 overflow-hidden',
  secondary:
    'bg-ink text-white hover:bg-ink/90 dark:bg-white dark:text-ink dark:hover:bg-white/90',
  ghost:
    'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20',
  outline:
    'border border-ink/15 dark:border-white/15 text-ink dark:text-white hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400',
  gold:
    'bg-gradient-to-r from-gold-400 to-gold-300 text-ink shadow-soft hover:shadow-[0_0_50px_rgba(244,180,0,0.45)]',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    variant = 'primary',
    size = 'md',
    href,
    external,
    icon,
    iconRight,
    children,
    className,
    fullWidth,
    ...rest
  },
  ref,
) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 select-none',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className,
  );

  const inner = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-sheen" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="relative">{children}</span>
      {iconRight && (
        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      ref={ref}
      className={classes}
      {...(rest as React.ComponentProps<typeof motion.button>)}
    >
      {inner}
    </motion.button>
  );
});
