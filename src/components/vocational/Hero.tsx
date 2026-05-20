'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Phone,
  BadgeCheck,
  GraduationCap,
  Briefcase,
  HeartPulse,
  School,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { vocational } from '@/lib/vocational';

export function VocationalHero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(useTransform(mx, [-1, 1], [-15, 15]), { stiffness: 80, damping: 20 });
  const py = useSpring(useTransform(my, [-1, 1], [-15, 15]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-50 mask-fade-b" />

      <motion.div
        style={{ x: px, y: py }}
        className="absolute top-32 -left-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
      />
      <motion.div
        style={{ x: useTransform(px, v => -v), y: useTransform(py, v => -v) }}
        className="absolute bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-teal-500/30 blur-3xl"
      />

      <div className="container-page relative grid lg:grid-cols-12 gap-12 items-center min-h-[88svh] pt-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium">
              <span className="relative grid place-items-center h-5 w-5">
                <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-pulse-ring" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-emerald-700 dark:text-emerald-400">Admissions Open</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              <span className="text-slate-700 dark:text-slate-300">Limited Seats Available</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium">
              <BadgeCheck className="h-3.5 w-3.5 text-brand-500" />
              <span className="text-slate-700 dark:text-slate-300">100% Job Opportunities</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-heading font-bold tracking-tight text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-ink dark:text-white leading-[1.05] sm:leading-[1.02] break-words"
          >
            Build Your{' '}
            <span className="relative inline-block">
              <span className="text-gradient animate-gradient-pan">Healthcare Career</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute -bottom-1.5 left-0 right-0 h-1.5 origin-left bg-gradient-brand rounded-full"
              />
            </span>{' '}
            After 10th Class.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {vocational.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 rounded-2xl glass p-4 max-w-xl"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
              <p className="text-sm text-ink/80 dark:text-white/80 leading-relaxed">
                {vocational.highlight}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/apply" size="lg" icon={<Sparkles className="h-4 w-4" />} iconRight={<ArrowRight className="h-4 w-4" />}>
              Apply Now
            </Button>
            <Button href="#courses" variant="outline" size="lg">
              Explore Courses
            </Button>
            <Button href="#contact" variant="outline" size="lg" icon={<Phone className="h-4 w-4" />}>
              Contact Admissions
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-6 flex-wrap text-xs"
          >
            <div className="uppercase tracking-widest text-slate-500 dark:text-slate-400">
              For Students Who
            </div>
            <div className="flex items-center gap-5 font-medium flex-wrap">
              {['Passed 10th', 'Failed 10th', 'Want Govt Jobs', 'Want Self-Employment'].map(a => (
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
            <div className="absolute inset-0 rounded-[2.5rem] glass-strong shadow-soft overflow-hidden border border-white/40 dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 via-teal-500/20 to-gold-400/15" />
              <div className="absolute inset-0 grid-bg opacity-40" />

              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/90">
                  <span>Sri Sai Vocational</span>
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
                        <div className="text-xs text-slate-500">Job Opportunities</div>
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
                        <div className="text-xs text-slate-500">Higher Education Pathways</div>
                        <div className="font-heading font-bold text-2xl text-ink">
                          <Counter to={6} suffix="+" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -left-6 lg:-left-12 top-12 hidden lg:flex items-center gap-3 rounded-2xl glass-strong shadow-soft px-4 py-3 animate-float"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-brand text-white grid place-items-center">
                <School className="h-4 w-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold">After 10th</div>
                <div className="text-slate-500">Pass or Fail · Both Eligible</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute -right-4 lg:-right-8 bottom-20 hidden lg:flex items-center gap-3 rounded-2xl glass-strong shadow-soft px-4 py-3 animate-float [animation-delay:-2.5s]"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-gold-400 to-brand-500 text-white grid place-items-center">
                <HeartPulse className="h-4 w-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold">NEET / EAMCET</div>
                <div className="text-slate-500">Via Bridge Courses</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
