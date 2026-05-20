'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Modal } from '@/components/ui/Modal';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [i, setI] = useState(0);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setI(prev => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setI(prev => (prev + 1) % testimonials.length);
  const prev = () => setI(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Student Voices"
              title="Stories from"
              highlight="our graduates."
              subtitle="Real experiences from students, parents, alumni and recruiters who chose Sri Sai — and the hospitals that hire them."
            />

            <button
              onClick={() => setVideo(true)}
              className="mt-8 group inline-flex items-center gap-4 rounded-2xl glass p-4 hover:shadow-soft transition-shadow"
            >
              <span className="relative grid place-items-center h-14 w-14 rounded-2xl bg-gradient-brand text-white shadow-soft">
                <span className="absolute inset-0 rounded-2xl bg-brand-500/40 animate-pulse-ring" />
                <Play className="h-5 w-5 fill-current ml-0.5 relative" />
              </span>
              <span className="text-left">
                <span className="block font-heading font-semibold">Watch Video Story</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">2:14 · Priya, DMLT 2023</span>
              </span>
            </button>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="grid place-items-center h-11 w-11 rounded-full border border-slate-200/60 dark:border-white/10 hover:border-brand-500 hover:text-brand-600 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="grid place-items-center h-11 w-11 rounded-full border border-slate-200/60 dark:border-white/10 hover:border-brand-500 hover:text-brand-600 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="ml-3 flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Slide ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === i ? 'w-8 bg-gradient-brand' : 'w-1.5 bg-slate-300 dark:bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard {...testimonials[i]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Modal open={video} onClose={() => setVideo(false)} title="Student Story · Priya, DMLT 2023">
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand-500/30 via-teal-500/20 to-gold-400/20 grid place-items-center">
          <div className="text-center">
            <div className="font-heading font-semibold text-lg">Video Player Placeholder</div>
            <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Embed YouTube/Vimeo iframe here
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
