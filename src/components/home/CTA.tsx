'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 lg:p-20 bg-gradient-to-br from-brand-600 via-brand-500 to-teal-500 text-white"
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-400/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="h-4 w-4" />
                Admissions Open — Inter (Any Group) Pass
              </span>
              <h2 className="mt-5 font-heading font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Join paramedical courses — secure self-employment & government jobs.
              </h2>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
                Talk to our Shadnagar admissions team today. 100% job guidance in government and private healthcare — and full support if you want to start your own diagnostic centre or optical shop.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button href="/apply" variant="gold" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
                Apply Now
              </Button>
              <Button href={`tel:${site.phone.replace(/\s/g, '')}`} variant="ghost" size="lg" icon={<Phone className="h-4 w-4" />}>
                {site.phone}
              </Button>
              <Button href={`tel:${site.phoneSecondary.replace(/\s/g, '')}`} variant="ghost" size="lg" icon={<Phone className="h-4 w-4" />}>
                {site.phoneSecondary}
              </Button>
              <div className="mt-2 text-xs text-white/70 text-center">
                Mon – Sat · 9 AM to 7 PM
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
