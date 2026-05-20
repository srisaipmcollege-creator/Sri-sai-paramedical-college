'use client';

import { Reveal } from './Reveal';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
};

export function PageHero({ eyebrow, title, highlight, subtitle, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-50 mask-fade-b" />
      <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-float" />
      <div className="absolute top-60 right-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl animate-float [animation-delay:-3s]" />

      <div className="container-page relative">
        {crumbs && crumbs.length > 0 && (
          <Reveal>
            <nav className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mb-6">
              {crumbs.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3 w-3 opacity-60" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand-600">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink dark:text-white font-medium">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal>
            <span className="section-eyebrow">
              <span className="h-1 w-6 rounded-full bg-gradient-brand" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-5 font-heading font-bold tracking-tight text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-ink dark:text-white max-w-4xl leading-[1.1] sm:leading-[1.05] break-words">
            {title}{' '}
            {highlight && <span className="text-gradient animate-gradient-pan">{highlight}</span>}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
