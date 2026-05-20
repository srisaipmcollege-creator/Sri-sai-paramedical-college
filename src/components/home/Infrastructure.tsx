'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { infrastructure } from '@/lib/data';

export function Infrastructure() {
  return (
    <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]" id="infrastructure">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Infrastructure"
            title="A campus built for"
            highlight="clinical excellence."
            subtitle="Smart classrooms, hospital-grade laboratories, a 500-seat auditorium and modern hostels — every facility designed for hands-on learning."
          />
          <Button href="/infrastructure" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
            Tour the Campus
          </Button>
        </div>

        {/* Horizontal scroll showcase */}
        <div className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto pb-4">
          <div className="flex gap-5 px-4 sm:px-6 lg:px-8 min-w-max">
            {infrastructure.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="group w-72 shrink-0 rounded-3xl overflow-hidden glass hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
              >
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 via-teal-500/20 to-transparent" />
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 text-[10px] uppercase tracking-widest font-semibold text-brand-600">
                    {item.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-ink dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
