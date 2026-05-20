'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Hospital,
  Microscope,
  HeartPulse,
  Sparkles,
  Rocket,
  Plane,
  PhoneCall,
  type LucideIcon,
} from 'lucide-react';
import { Counter } from '@/components/ui/Counter';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { futureCareer } from '@/lib/vocational';

const ICONS: LucideIcon[] = [Building2, Hospital, Microscope, HeartPulse, Sparkles, Rocket, Plane, PhoneCall];

const stats = [
  { v: 100, suffix: '%', label: 'Job Opportunities' },
  { v: 8, suffix: '+', label: 'Career Tracks' },
  { v: 6, suffix: '+', label: 'Higher Education Paths' },
  { v: 2, suffix: ' Yr', label: 'Course Duration' },
];

export function FutureCareer() {
  return (
    <section className="relative py-24 md:py-32" id="future">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Future Careers"
            title="Where a Sri Sai Vocational"
            highlight="diploma can take you."
            subtitle="From state hospitals to your own diagnostic centre, from 108 emergency services to international careers — your options are wide open."
          />
          <Button href="/apply" iconRight={<ArrowRight className="h-4 w-4" />}>
            Start Your Journey
          </Button>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-3xl glass p-6 text-center"
            >
              <div className="font-heading font-bold text-3xl text-gradient">
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {futureCareer.map((f, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
              >
                <span className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-brand opacity-15 group-hover:opacity-40 blur-3xl transition-opacity duration-500" />
                <div className="relative grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading font-semibold text-base text-ink dark:text-white leading-snug">
                  {f.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {f.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
