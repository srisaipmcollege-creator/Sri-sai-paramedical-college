'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, GraduationCap, Users } from 'lucide-react';
import type { Course } from '@/lib/data';
import { cn } from '@/lib/utils';

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const Icon = course.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link
        href={`/courses/${course.slug}`}
        className="relative flex flex-col h-full overflow-hidden rounded-3xl glass p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
      >
        <div
          className={cn(
            'absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60',
            'bg-gradient-to-br',
            course.color,
          )}
        />

        <div className="relative flex items-center justify-between">
          <div
            className={cn(
              'grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br text-white shadow-soft',
              course.color,
            )}
          >
            <Icon className="h-7 w-7" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {course.category}
          </span>
        </div>

        <h3 className="mt-6 font-heading text-xl md:text-2xl font-semibold text-ink dark:text-white leading-snug">
          {course.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
          <Meta icon={Clock} label={course.duration} sub="Duration" />
          <Meta icon={GraduationCap} label="Inter Pass" sub="Eligibility" />
          <Meta icon={Users} label={`${course.seats}`} sub="Seats" />
        </div>

        <div className="mt-7 flex items-center justify-between pt-5 border-t border-slate-200/60 dark:border-white/10">
          <span className="text-sm font-medium">
            <span className="text-ink dark:text-white font-semibold">{course.fees}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
            Explore <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.article>
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
      <div className="mt-2 text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">{sub}</div>
      <div className="font-semibold text-ink dark:text-white text-xs">{label}</div>
    </div>
  );
}
