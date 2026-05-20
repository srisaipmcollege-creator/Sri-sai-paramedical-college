'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Sparkles,
  Wallet,
  GraduationCap,
  HeartPulse,
  Microscope,
  Tag,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { vocationalFeatures } from '@/lib/vocational';

const ICONS: LucideIcon[] = [
  Briefcase, Building2, Sparkles, Wallet, GraduationCap, HeartPulse, Microscope, Tag,
];

export function WhyVocational() {
  return (
    <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-b pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Why Sri Sai Vocational"
          title="Built for"
          highlight="real outcomes after 10th."
          subtitle="Every feature is designed for one thing — getting you a real career, real income and real growth, fast."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vocationalFeatures.map((f, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
              >
                <span className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500" />
                <div className="relative grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading font-semibold text-base text-ink dark:text-white">
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
