'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

type Props = {
  name: string;
  role: string;
  qual: string;
  exp: string;
  avatar: string;
  index?: number;
};

export function FacultyCard({ name, role, qual, exp, avatar, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl glass p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full blur-3xl bg-gradient-brand opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
      <div className="relative mx-auto h-24 w-24 rounded-full bg-gradient-brand text-white grid place-items-center text-3xl font-heading font-bold shadow-soft">
        {avatar}
      </div>
      <h3 className="mt-5 font-heading font-semibold text-lg text-ink dark:text-white">{name}</h3>
      <p className="text-sm text-brand-600 dark:text-brand-400 font-medium">{role}</p>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>{qual}</span>
        <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
        <span>{exp}</span>
      </div>
      <div className="mt-5 flex justify-center gap-2">
        <button className="grid place-items-center h-9 w-9 rounded-full border border-slate-200/60 dark:border-white/10 hover:border-brand-500 hover:text-brand-600 transition-colors">
          <Linkedin className="h-4 w-4" />
        </button>
        <button className="grid place-items-center h-9 w-9 rounded-full border border-slate-200/60 dark:border-white/10 hover:border-brand-500 hover:text-brand-600 transition-colors">
          <Mail className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}
