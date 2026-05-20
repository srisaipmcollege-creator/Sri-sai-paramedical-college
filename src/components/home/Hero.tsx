'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Microscope,
  BadgeCheck,
  Stethoscope,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(useTransform(mx, [-1, 1], [-15, 15]), { stiffness: 80, damping: 20 });
  const py = useSpring(useTransform(my, [-1, 1], [-15, 15]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-50 mask-fade-b" />

      {/* Floating orbs */}
      <motion.div
        style={{ x: px, y: py }}
        className="absolute top-32 -left-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
      />
      <motion.div
        style={{ x: useTransform(px, v => -v), y: useTransform(py, v => -v) }}
        className="absolute bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-teal-500/30 blur-3xl"
      />
      <motion.div
        style={{ x: useTransform(px, v => v * 0.5), y: useTransform(py, v => v * 0.5) }}
        className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"
      />

      {/* Particle dots */}
      <Particles />

      <div className="container-page relative grid lg:grid-cols-12 gap-12 items-center min-h-[88svh] pt-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"
          >
            <span className="relative grid place-items-center h-5 w-5">
              <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-pulse-ring" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-emerald-700 dark:text-emerald-400">Admissions Open Now</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-600 dark:text-slate-400">Inter (Any Group) Pass</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-heading font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl text-ink dark:text-white leading-[1.02]"
          >
            Empowering{' '}
            <span className="relative inline-block">
              <span className="text-gradient animate-gradient-pan">Future Healthcare</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute -bottom-1.5 left-0 right-0 h-1.5 origin-left bg-gradient-brand rounded-full"
              />
            </span>{' '}
            Professionals.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Sri Sai Paramedical College, Shadnagar provides career-focused paramedical education with practical training, hospital exposure and strong opportunities in government and private healthcare sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="/apply" size="lg" icon={<Sparkles className="h-4 w-4" />} iconRight={<ArrowRight className="h-4 w-4" />}>
              Apply Now
            </Button>
            <Button href="/courses" variant="outline" size="lg">
              Explore Courses
            </Button>
            <Button href="/contact" variant="outline" size="lg" icon={<Phone className="h-4 w-4" />}>
              Contact Admissions
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-6 flex-wrap"
          >
            <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Trusted Affiliations
            </div>
            <div className="flex items-center gap-5 text-xs font-medium flex-wrap">
              {[
                'Telangana Paramedical Board',
                '100% Job Guidance',
                'Govt & Private Roles',
                'Practical Hospital Training',
              ].map(a => (
                <span key={a} className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <BadgeCheck className="h-3.5 w-3.5 text-brand-500" />
                  {a}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 relative">
          <motion.div
            style={{ x: useTransform(px, v => v * 0.3), y: useTransform(py, v => v * 0.3) }}
            className="relative aspect-[5/6] mx-auto max-w-md"
          >
            {/* Phone-like display */}
            <div className="absolute inset-0 rounded-[2.5rem] glass-strong shadow-soft overflow-hidden border border-white/40 dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 via-teal-500/20 to-transparent" />
              <div className="absolute inset-0 grid-bg opacity-40" />

              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/90">
                  <span>Admissions Open</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>
                <div className="mt-auto space-y-3">
                  <div className="rounded-2xl bg-white/85 backdrop-blur p-4 shadow-soft">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-brand text-white grid place-items-center">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Job Guidance</div>
                        <div className="font-heading font-bold text-2xl text-ink">
                          <Counter to={100} suffix="%" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/85 backdrop-blur p-4 shadow-soft">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-brand-500 text-white grid place-items-center">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Paramedical Courses</div>
                        <div className="font-heading font-bold text-2xl text-ink">
                          <Counter to={8} suffix="+" /> · 2 Year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating side cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -left-12 top-12 hidden sm:flex items-center gap-3 rounded-2xl glass-strong shadow-soft px-4 py-3 animate-float"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-brand text-white grid place-items-center">
                <Microscope className="h-4 w-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold">Practical Lab Training</div>
                <div className="text-slate-500">Hands-on, day one</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute -right-8 bottom-20 hidden sm:flex items-center gap-3 rounded-2xl glass-strong shadow-soft px-4 py-3 animate-float [animation-delay:-2.5s]"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-gold-400 to-brand-500 text-white grid place-items-center">
                <Stethoscope className="h-4 w-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold">Govt & Private Roles</div>
                <div className="text-slate-500">Hospitals · Diagnostics · Clinics</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
        <span>Scroll</span>
        <div className="relative h-8 w-5 rounded-full border border-current/40">
          <span className="absolute left-1/2 top-1.5 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-current animate-scroll-indicator" />
        </div>
        <ChevronDown className="h-3 w-3" />
      </div>
    </section>
  );
}

function Particles() {
  const dots = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [0, -30, -60],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
          className="absolute h-1 w-1 rounded-full bg-brand-500/60"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}
