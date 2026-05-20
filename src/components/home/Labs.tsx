'use client';

import { motion } from 'framer-motion';
import { Microscope, FlaskConical, HeartPulse, Scan, Activity, Stethoscope } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { InfraImage } from '@/components/ui/InfraImage';

const items = [
  {
    icon: Microscope,
    title: 'Pathology Lab',
    desc: 'Automated analysers, microscopy, slide preparation and clinical sample handling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
  },
  {
    icon: FlaskConical,
    title: 'Biochemistry Lab',
    desc: 'Spectrophotometers, electrolyte analysers, full chemistry workflow.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80&auto=format&fit=crop',
  },
  {
    icon: HeartPulse,
    title: 'Cardiology Suite',
    desc: 'ECG, Holter, treadmill — full cardiac diagnostic training environment.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop',
  },
  {
    icon: Scan,
    title: 'Radiology Suite',
    desc: 'Digital X-ray simulators, PACS workstations, CT-prep training.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=900&q=80&auto=format&fit=crop',
  },
  {
    icon: Activity,
    title: 'Dialysis Lab',
    desc: 'Working dialysis machines, vascular access training, RO water treatment.',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80&auto=format&fit=crop',
  },
  {
    icon: Stethoscope,
    title: 'OT Simulation',
    desc: 'Mock operation theatre with surgical instruments, sterile field protocols.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=80&auto=format&fit=crop',
  },
];

export function Labs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#070B16] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B16] via-[#0A1024] to-[#070B16]" />
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-teal-500/30 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl"
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-page relative">
        <SectionHeader
          eyebrow="Labs & Practical Training"
          title="Where students become"
          highlight="practitioners."
          subtitle="Sri Sai blends classroom theory with full hospital workflows. From day one, students operate real equipment, manage real samples, and learn under real clinicians."
          center
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:-translate-y-1 transition-all duration-500"
            >
              <span className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 via-teal-500/30 to-transparent" />
                <InfraImage
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/40 to-transparent" />

                {/* Floating icon */}
                <div className="absolute bottom-4 left-5 grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>

              <div className="relative p-7 pt-5">
                <h3 className="font-heading font-semibold text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-400 group-hover:text-teal-400 transition-colors">
                  Hospital-grade <span className="h-px w-8 bg-current" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto text-center">
            {[
              { num: '70%', text: 'Practical exposure built into every program' },
              { num: '12+', text: 'Specialty labs with real medical instruments' },
              { num: '6 mo', text: 'Mandatory hospital internship for graduation' },
            ].map(s => (
              <div key={s.text} className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
                <div className="font-heading font-bold text-3xl text-gradient">{s.num}</div>
                <div className="mt-2 text-xs text-white/60">{s.text}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
