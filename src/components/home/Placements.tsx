'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Building2, Award } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';
import { Marquee } from '@/components/ui/Marquee';
import { Button } from '@/components/ui/Button';
import { partners } from '@/lib/data';

const stats = [
  { icon: TrendingUp, label: 'Job Guidance', value: 100, suffix: '%', color: 'from-brand-500 to-teal-500' },
  { icon: Briefcase, label: 'Career Pathways', value: 6, suffix: '+', color: 'from-teal-500 to-brand-500' },
  { icon: Award, label: 'Paramedical Programs', value: 8, suffix: '+', color: 'from-gold-400 to-brand-500' },
  { icon: Building2, label: 'Govt & Private Roles', value: 50, suffix: '+', color: 'from-brand-500 to-gold-400' },
];

const growth = [
  { year: 'Stage 1', label: 'Entry — Hospital / Diagnostic Centre', value: 'Trainee / Junior Tech', width: 30 },
  { year: 'Stage 2', label: 'Mid-Career — Hospital Technician', value: 'Senior Technician', width: 55 },
  { year: 'Stage 3', label: 'Department Lead / Specialist', value: 'Lab / OT Lead', width: 78 },
  { year: 'Stage 4', label: 'Entrepreneur / Centre Owner', value: 'Own Diagnostic / Optical Centre', width: 95 },
];

export function Placements() {
  return (
    <section className="relative py-24 md:py-32" id="placements">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Placements"
            title="100% job guidance —"
            highlight="government & private."
            subtitle="Our placement support spans state hospitals, corporate hospitals, diagnostic centres, optical chains and Gulf opportunities — plus dedicated guidance for self-employment."
          />
          <Button href="/placements" variant="outline">
            See Placement Report
          </Button>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl glass p-7"
            >
              <div className={`absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-25 group-hover:opacity-50 blur-3xl bg-gradient-to-br ${s.color}`} />
              <div className={`grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-soft`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-6 font-heading font-bold text-4xl text-ink dark:text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl glass p-7 md:p-9">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Career Growth Path
            </div>
            <h3 className="mt-3 font-heading font-bold text-2xl md:text-3xl text-ink dark:text-white">
              From fresher to specialist — and beyond.
            </h3>
            <div className="mt-8 space-y-6">
              {growth.map((g, i) => (
                <Reveal key={g.year} delay={i * 0.07}>
                  <div>
                    <div className="flex items-baseline justify-between gap-3">
                      <div>
                        <div className="font-heading font-semibold text-sm text-brand-600 dark:text-brand-400">
                          {g.year}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{g.label}</div>
                      </div>
                      <div className="font-heading font-bold text-base text-ink dark:text-white">
                        {g.value}
                      </div>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-200/70 dark:bg-white/[0.05] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.width}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                        className="h-full rounded-full bg-gradient-brand"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl glass p-7 md:p-9 flex flex-col">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Where Sri Sai students go
            </div>
            <h3 className="mt-3 font-heading font-bold text-2xl md:text-3xl text-ink dark:text-white">
              Govt hospitals, private chains & diagnostic centres.
            </h3>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {partners.slice(0, 9).map(p => (
                <div
                  key={p}
                  className="aspect-[5/3] rounded-2xl border border-slate-200/60 dark:border-white/10 grid place-items-center text-center px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:border-brand-500 hover:text-brand-600 transition-colors"
                >
                  {p}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Button href="/placements" fullWidth>
                Full Placement Report
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Marquee speed="normal">
            {partners.map(p => (
              <span
                key={p}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200/60 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-slate-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                {p}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
