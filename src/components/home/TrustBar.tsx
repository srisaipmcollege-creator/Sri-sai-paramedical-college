'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Microscope, Hospital } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';
import { trustStats } from '@/lib/data';

const icons = [Award, Users, TrendingUp, Hospital, Microscope];

export function TrustBar() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container-page">
        <div className="rounded-3xl glass-strong shadow-soft p-3 sm:p-4">
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {trustStats.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group relative flex items-center gap-4 rounded-2xl p-4 hover:bg-white/70 dark:hover:bg-white/[0.03] transition-colors"
                >
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-brand text-white shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-ink dark:text-white leading-none">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
