'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { events } from '@/lib/data';

function useCountdown(date: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, new Date(date).getTime() - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
  };
}

export function Events() {
  return (
    <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]" id="events">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Events & News"
            title="What's happening on"
            highlight="campus."
            subtitle="Workshops, medical camps, recruiter drives and guest lectures — your weekly dose of clinical exposure."
          />
          <Button href="/events" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
            All Events
          </Button>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((e, i) => (
            <EventCard key={e.title} event={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: (typeof events)[number]; index: number }) {
  const { days, hours, minutes } = useCountdown(event.date);
  const date = new Date(event.date);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500 flex flex-col"
    >
      <span className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-15 blur-3xl group-hover:opacity-35 transition-opacity duration-500" />

      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-white/85 dark:bg-white/[0.06] backdrop-blur p-3 text-center w-16">
          <div className="text-[10px] uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
            {date.toLocaleString('en-IN', { month: 'short' })}
          </div>
          <div className="font-heading font-bold text-2xl text-ink dark:text-white">
            {date.getDate()}
          </div>
        </div>
        <span className="text-[10px] uppercase tracking-widest font-semibold text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full bg-teal-500/10">
          {event.type}
        </span>
      </div>

      <h3 className="mt-5 font-heading font-semibold text-lg text-ink dark:text-white leading-snug">
        {event.title}
      </h3>
      <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
        {event.desc}
      </p>

      <div className="mt-5 space-y-2 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5" />
          {date.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5" />
          09:30 AM
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" />
          Main Campus
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          { v: days, l: 'Days' },
          { v: hours, l: 'Hrs' },
          { v: minutes, l: 'Min' },
        ].map(t => (
          <div key={t.l} className="rounded-xl bg-ink/5 dark:bg-white/5 text-center py-2">
            <div className="font-heading font-bold text-base text-ink dark:text-white">{t.v}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">{t.l}</div>
          </div>
        ))}
      </div>

      <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-4 py-2.5 text-xs font-semibold shadow-soft hover:shadow-glow transition-shadow">
        Register Free <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </motion.article>
  );
}
