'use client';

import { useMemo, useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CourseCard } from '@/components/ui/CourseCard';
import { Button } from '@/components/ui/Button';
import { courses } from '@/lib/data';
import { cn } from '@/lib/utils';

const categories = ['All', 'Diagnostics', 'Clinical', 'Imaging'] as const;

export function CoursesSection() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<(typeof categories)[number]>('All');

  const filtered = useMemo(() => {
    return courses.filter(c => {
      const matchesCat = cat === 'All' || c.category === cat;
      const matchesQ =
        q.trim() === '' ||
        c.title.toLowerCase().includes(q.toLowerCase()) ||
        c.code.toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [q, cat]);

  return (
    <section className="relative py-24 md:py-32" id="courses">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Programs"
            title="8 paramedical diplomas —"
            highlight="all 2-year, all career-focused."
            subtitle="Career-aligned paramedical diplomas built around real hospital workflows. Affiliated to the Telangana Paramedical Board · Eligibility: Inter (Any Group) Pass."
          />
          <Button href="/courses" variant="outline">
            View All Programs
          </Button>
        </div>

        <div className="mt-10 grid md:grid-cols-12 gap-4">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 rounded-full glass p-1.5">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all',
                    cat === c
                      ? 'bg-gradient-brand text-white shadow-soft'
                      : 'text-slate-600 dark:text-slate-400 hover:text-ink dark:hover:text-white',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-4 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="search"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search programs (e.g. DMLT, dialysis)"
              className="w-full rounded-full bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all"
            />
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((c, i) => (
            <CourseCard key={c.slug} course={c} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 grid place-items-center text-center rounded-3xl glass p-12">
            <Sparkles className="h-8 w-8 text-brand-500" />
            <p className="mt-3 font-heading font-semibold text-lg">No matching programs.</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Try a different keyword or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
