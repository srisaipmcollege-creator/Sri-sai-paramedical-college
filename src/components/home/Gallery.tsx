'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ImageIcon, Play, X } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Item = { id: number; cat: string; title: string; ratio: 'sq' | 'tall' | 'wide'; type?: 'image' | 'video' };

const items: Item[] = [
  { id: 1, cat: 'Labs', title: 'Hematology Lab', ratio: 'tall' },
  { id: 2, cat: 'Events', title: 'Annual Day 2025', ratio: 'wide' },
  { id: 3, cat: 'Campus', title: 'Library Atrium', ratio: 'sq' },
  { id: 4, cat: 'Workshops', title: 'BLS Bootcamp', ratio: 'sq', type: 'video' },
  { id: 5, cat: 'Students', title: 'Graduation 2024', ratio: 'wide' },
  { id: 6, cat: 'Labs', title: 'Radiology Suite', ratio: 'tall' },
  { id: 7, cat: 'Campus', title: 'Auditorium', ratio: 'sq' },
  { id: 8, cat: 'Workshops', title: 'OT Sim Drill', ratio: 'wide', type: 'video' },
];

const cats = ['All', 'Labs', 'Campus', 'Events', 'Workshops', 'Students'];

export function Gallery() {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState<Item | null>(null);
  const filtered = cat === 'All' ? items : items.filter(i => i.cat === cat);

  return (
    <section className="relative py-24 md:py-32" id="gallery">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Campus Gallery"
            title="Life at"
            highlight="Sri Sai."
            subtitle="A glimpse into the labs, hospitals, workshops and events that define everyday life on our campus."
          />
          <Button href="/gallery" variant="outline" iconRight={<ArrowRight className="h-4 w-4" />}>
            Open Full Gallery
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
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

        <div className="mt-8 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <motion.button
              key={it.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              onClick={() => setOpen(it)}
              className={cn(
                'group relative w-full mb-4 break-inside-avoid overflow-hidden rounded-3xl glass text-left',
                it.ratio === 'sq' && 'aspect-square',
                it.ratio === 'tall' && 'aspect-[3/4]',
                it.ratio === 'wide' && 'aspect-[4/3]',
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 via-teal-500/20 to-gold-400/10" />
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-90" />
              {it.type === 'video' && (
                <span className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-white/85 text-brand-600 shadow-soft">
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                </span>
              )}
              <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                <div className="text-[10px] uppercase tracking-widest text-white/80">{it.cat}</div>
                <div className="mt-1 font-heading font-semibold text-sm text-white">{it.title}</div>
              </div>
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/40 backdrop-blur-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 text-ink px-4 py-2 text-xs font-semibold">
                  <ImageIcon className="h-3.5 w-3.5" /> View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center p-4"
          >
            <button onClick={() => setOpen(null)} className="absolute inset-0 bg-ink/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video rounded-3xl overflow-hidden glass-strong"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 via-teal-500/30 to-gold-400/20" />
              <div className="absolute inset-0 grid place-items-center text-white">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-white/80">{open.cat}</div>
                  <div className="font-heading font-bold text-3xl mt-2">{open.title}</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-white/90 text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
