'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, School, Sparkles } from 'lucide-react';

export function VocationalBanner() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] p-7 md:p-10 lg:p-12 bg-gradient-to-br from-teal-500 via-brand-500 to-brand-600 text-white"
        >
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-400/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-gold-300" />
                Sister Institution
              </span>
              <h2 className="mt-4 font-heading font-bold text-2xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                After 10th class? Start your healthcare career now.
              </h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/85 leading-relaxed">
                <strong>Sri Sai Vocational Junior College</strong> — 2-year paramedical courses
                (M.L.T &amp; M.P.H.W. Female) for 10th pass or fail students. 100% job opportunities,
                self-employment support and pathways to NEET, EAMCET and degree education.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <Link
                href="/vocational"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-600 px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                <School className="h-4 w-4" />
                Explore Vocational
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/vocational#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white px-6 py-3 text-sm font-medium hover:bg-white/25 transition-colors"
              >
                Contact Vocational Admissions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
