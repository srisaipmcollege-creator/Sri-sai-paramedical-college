'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpenCheck, Briefcase, Clock, GraduationCap, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { vocationalCourses } from '@/lib/vocational';
import { cn } from '@/lib/utils';

export function VocationalCourses() {
  return (
    <section className="relative py-24 md:py-32" id="courses">
      <div className="container-page">
        <SectionHeader
          eyebrow="Vocational Programs"
          title="2 career-focused"
          highlight="vocational diplomas."
          subtitle="Practical, hands-on paramedical programs designed for life after 10th — with direct job opportunities and pathways into higher education."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {vocationalCourses.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl glass p-7 md:p-9 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
              >
                <div
                  className={cn(
                    'absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500',
                    'bg-gradient-to-br',
                    c.color,
                  )}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'grid place-items-center h-16 w-16 rounded-2xl text-white shadow-soft bg-gradient-to-br',
                        c.color,
                      )}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                        {c.code}
                      </div>
                      <h3 className="mt-1 font-heading font-bold text-2xl text-ink dark:text-white leading-tight">
                        {c.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="relative mt-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {c.description}
                </p>

                <div className="relative mt-6 grid grid-cols-3 gap-3 text-xs">
                  <Meta icon={Clock} label={c.duration} sub="Duration" />
                  <Meta icon={Users} label={c.eligibility} sub="Eligibility" />
                  <Meta icon={Briefcase} label="100% Jobs" sub="Outcome" />
                </div>

                <div className="relative mt-7">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    <Briefcase className="h-3.5 w-3.5" /> Career Opportunities
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.careers.map(role => (
                      <li
                        key={role}
                        className="rounded-full border border-slate-200/60 dark:border-white/10 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-7">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                    <GraduationCap className="h-3.5 w-3.5" /> Higher Education
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.higherEd.map(deg => (
                      <li
                        key={deg}
                        className="rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 px-3 py-1.5 text-xs font-medium"
                      >
                        {deg}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-7 rounded-2xl bg-gradient-brand text-white p-4 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 mt-0.5 text-gold-400" />
                  <div className="text-sm">{c.highlight}</div>
                </div>

                <div className="relative mt-7 flex flex-wrap gap-3">
                  <Button href="/apply" size="md" iconRight={<ArrowRight className="h-4 w-4" />}>
                    Apply for {c.code}
                  </Button>
                  <Button href="#contact" variant="outline" icon={<BookOpenCheck className="h-4 w-4" />}>
                    Talk to Counsellor
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Meta({
  icon: Icon,
  label,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 p-3">
      <Icon className="h-4 w-4 text-brand-500" />
      <div className="mt-2 text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">{sub}</div>
      <div className="font-semibold text-ink dark:text-white text-xs">{label}</div>
    </div>
  );
}
