'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Check } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { admissionSteps } from '@/lib/data';

export function Admission() {
  return (
    <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]" id="admissions">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Admission Process"
            title="A 5-step journey to"
            highlight="join Sri Sai."
            subtitle="A transparent, supportive admissions experience — most students complete it in under a week."
          />
          <div className="flex flex-wrap gap-3">
            <Button href="/apply" iconRight={<ArrowRight className="h-4 w-4" />}>
              Apply Online
            </Button>
            <Button href="#" variant="outline" icon={<Download className="h-4 w-4" />}>
              Download Brochure
            </Button>
          </div>
        </div>

        <div className="mt-14 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 mx-12 h-px bg-gradient-to-r from-brand-500/0 via-brand-500/50 to-teal-500/0" />

          <ol className="grid lg:grid-cols-5 gap-5 lg:gap-3">
            {admissionSteps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="relative"
              >
                <div className="group relative h-full rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white font-heading font-bold shadow-soft">
                      {s.step}
                    </div>
                    {i < admissionSteps.length - 1 && (
                      <span className="hidden lg:block h-px flex-1 bg-gradient-to-r from-brand-500/40 to-transparent" />
                    )}
                  </div>
                  <h3 className="mt-5 font-heading font-semibold text-base text-ink dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                    <Check className="h-3 w-3" /> Avg 1-2 days
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
