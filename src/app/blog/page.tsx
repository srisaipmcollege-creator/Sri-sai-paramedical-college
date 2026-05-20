'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Search } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { posts } from '@/lib/data';
import { cn } from '@/lib/utils';

const cats = ['All', 'Careers', 'Technology', 'Internships', 'Scholarships'] as const;

export default function Page() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<(typeof cats)[number]>('All');

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const okCat = cat === 'All' || p.category === cat;
      const okQ =
        q.trim() === '' ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [q, cat]);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="The Sri Sai"
        highlight="Blog."
        subtitle="Career guides, technology trends, internship tips and scholarship news — written by our faculty and alumni."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-7 lg:col-span-8 flex flex-wrap gap-2">
              {cats.map(c => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all',
                    cat === c
                      ? 'bg-gradient-brand text-white shadow-soft'
                      : 'glass text-slate-600 dark:text-slate-400 hover:text-ink dark:hover:text-white',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="md:col-span-5 lg:col-span-4 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="search"
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search articles…"
                className="w-full rounded-full bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500"
              />
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl glass hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
              >
                <Link href={`/blog/${p.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 via-teal-500/30 to-gold-400/20" />
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[10px] uppercase tracking-widest font-semibold text-brand-600">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-ink dark:text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {p.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
