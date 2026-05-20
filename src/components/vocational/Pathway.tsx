'use client';

import { motion } from 'framer-motion';
import { ArrowRight, School, BookOpen, Briefcase, GraduationCap, Sparkles, type LucideIcon } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { pathway } from '@/lib/vocational';

const STEP_ICONS: LucideIcon[] = [School, BookOpen, Briefcase, GraduationCap, Sparkles];

export function VocationalPathway() {
  return (
    <section className="relative py-24 md:py-32" id="pathway">
      <div className="container-page">
        <SectionHeader
          eyebrow="Career Roadmap"
          title="Your healthcare journey —"
          highlight="from 10th to specialist."
          subtitle="A clear, step-by-step pathway that combines earning, learning and growing. Start working at 18 — and still keep the door open to a B.Sc., GNM or NEET."
          center
        />

        <div className="mt-16 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 mx-16 h-px bg-gradient-to-r from-brand-500/0 via-brand-500/60 to-teal-500/0" />

          <ol className="grid gap-5 lg:gap-3 lg:grid-cols-5">
            {pathway.map((s, i) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              return (
                <motion.li
                  key={s.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="relative"
                >
                  <div className="group relative h-full rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500">
                    <span className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-brand opacity-15 group-hover:opacity-40 blur-3xl transition-opacity duration-500" />

                    <div className="flex items-center justify-between">
                      <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="font-heading font-bold text-2xl text-gradient">{s.step}</div>
                    </div>
                    <h3 className="mt-5 font-heading font-semibold text-base text-ink dark:text-white">{s.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>

                  {/* Mobile arrow between cards */}
                  {i < pathway.length - 1 && (
                    <div className="lg:hidden flex justify-center my-1">
                      <ArrowRight className="h-4 w-4 text-brand-500 rotate-90" />
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
