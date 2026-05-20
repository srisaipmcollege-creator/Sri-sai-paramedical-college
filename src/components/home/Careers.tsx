'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Hospital,
  Microscope,
  Sparkles,
  Plane,
  Rocket,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Counter } from '@/components/ui/Counter';
import { Button } from '@/components/ui/Button';
import { careerTracks } from '@/lib/data';

const ICONS: LucideIcon[] = [Building2, Hospital, Microscope, Sparkles, Plane, Rocket];

const stats = [
  { label: 'Job Guidance', value: 100, suffix: '%' },
  { label: 'Career Pathways', value: 6, suffix: '+' },
  { label: 'Govt + Private Roles', value: 50, suffix: '+' },
  { label: 'Self-Employment Tracks', value: 3, suffix: '' },
];

export function Careers() {
  return (
    <section className="relative py-24 md:py-32" id="careers">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-b pointer-events-none" />
      <div className="container-page relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Career Opportunities"
            title="Where a Sri Sai diploma"
            highlight="can take you."
            subtitle="From state-run hospitals to your own diagnostic centre — paramedical careers open doors across government, private and entrepreneurial paths."
          />
          <Button href="/placements" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
            See All Placements
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
              className="rounded-3xl glass p-7 text-center"
            >
              <div className="mx-auto grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="mt-5 font-heading font-bold text-4xl text-ink dark:text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {careerTracks.map((t, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl glass p-7 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
              >
                <div
                  className={`absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-25 group-hover:opacity-50 blur-3xl bg-gradient-to-br ${t.color}`}
                />
                <div
                  className={`relative grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br ${t.color} text-white shadow-soft group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading font-semibold text-lg text-ink dark:text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.desc}
                </p>
                <ul className="mt-5 space-y-2 text-xs">
                  {t.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-500 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
