'use client';

import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { comparison } from '@/lib/vocational';

export function VocationalComparison() {
  return (
    <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-b pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Compare The Paths"
          title="Why choose vocational"
          highlight="paramedical courses?"
          subtitle="Traditional Intermediate gives you a certificate. Vocational paramedical gives you a career — plus the freedom to pursue higher education on your own terms."
          center
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl glass p-7 md:p-9 border border-slate-200/60 dark:border-white/10"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              The Old Way
            </div>
            <h3 className="mt-2 font-heading font-bold text-2xl text-ink dark:text-white">
              {comparison.traditional.title}
            </h3>
            <ul className="mt-6 space-y-4">
              {comparison.traditional.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-rose-500/10 text-rose-600 shrink-0">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed line-through decoration-rose-400/50 decoration-2">
                    {p}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vocational */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-7 md:p-9 bg-gradient-to-br from-brand-600 via-brand-500 to-teal-500 text-white shadow-soft"
          >
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-400/30 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-90">
                <Sparkles className="h-4 w-4 text-gold-300" />
                The Sri Sai Way
              </div>
              <h3 className="mt-2 font-heading font-bold text-2xl">
                {comparison.vocational.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {comparison.vocational.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-white/20 shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed font-medium">{p}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/apply" variant="gold" iconRight={<ArrowRight className="h-4 w-4" />}>
                  Choose The Smart Path
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
