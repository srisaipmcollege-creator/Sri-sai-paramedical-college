'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, CreditCard, FileText, Sparkles, User } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Input, Select, Textarea } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { courses } from '@/lib/data';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, label: 'Profile', icon: User },
  { id: 2, label: 'Program', icon: FileText },
  { id: 3, label: 'Payment', icon: CreditCard },
  { id: 4, label: 'Done', icon: Check },
];

export default function Page() {
  const [step, setStep] = useState(1);
  const progress = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <>
      <PageHero
        eyebrow="Online Application"
        title="Apply to"
        highlight="Sri Sai · 2026."
        subtitle="Complete the application in 4 quick steps. You'll receive a confirmation on email and WhatsApp."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Apply' }]}
      />

      <section className="pb-24">
        <div className="container-page max-w-4xl">
          <div className="rounded-3xl glass-strong p-6 md:p-10 shadow-soft">
            {/* Stepper */}
            <div className="flex items-center justify-between gap-2">
              {steps.map((s, i) => {
                const active = step === s.id;
                const done = step > s.id;
                const Icon = s.icon;
                return (
                  <div key={s.id} className="flex-1 flex items-center gap-2">
                    <div
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-2xl flex-1 transition-all',
                        active && 'bg-gradient-brand text-white shadow-soft',
                        done && !active && 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
                        !active && !done && 'bg-ink/5 dark:bg-white/5 text-slate-500',
                      )}
                    >
                      <span className="grid place-items-center h-7 w-7 rounded-xl bg-white/20">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest opacity-80">Step {s.id}</div>
                        <div className="text-xs font-semibold">{s.label}</div>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <span className="hidden sm:block h-px flex-1 bg-slate-200/60 dark:bg-white/10" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 h-1.5 rounded-full bg-slate-200/70 dark:bg-white/[0.05] overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-brand rounded-full"
              />
            </div>

            <div className="mt-10 min-h-[280px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="s1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    <Input label="Full Name" placeholder="Your full name" required />
                    <Input label="Date of Birth" type="date" required />
                    <Input label="Phone" placeholder="+91 98765 43210" type="tel" required />
                    <Input label="Email" placeholder="you@email.com" type="email" required />
                    <Select label="Gender" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </Select>
                    <Input label="City" placeholder="Your city" />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="s2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    <Select label="Preferred Course" defaultValue="">
                      <option value="" disabled>Select a course</option>
                      {courses.map(c => (
                        <option key={c.slug} value={c.slug}>{c.title}</option>
                      ))}
                    </Select>
                    <Input label="10+2 Percentage" placeholder="e.g. 78%" />
                    <Input label="Board" placeholder="State Board / CBSE / ICSE" />
                    <Input label="Year of Passing" placeholder="2025" />
                    <div className="sm:col-span-2">
                      <Textarea label="Anything we should know?" placeholder="Hostel preferences, scholarship interest, etc." />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="s3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid sm:grid-cols-5 gap-5"
                  >
                    <div className="sm:col-span-3 space-y-4">
                      <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 p-5">
                        <div className="text-[10px] uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                          Application Fee
                        </div>
                        <div className="mt-1 font-heading font-bold text-3xl text-ink dark:text-white">
                          ₹500 <span className="text-sm font-normal text-slate-500">non-refundable</span>
                        </div>
                      </div>
                      <Input label="Card Number" placeholder="1234 5678 9012 3456" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Expiry" placeholder="MM/YY" />
                        <Input label="CVV" placeholder="123" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Card', 'UPI', 'Net Banking', 'Pay Later'].map((m, i) => (
                          <button
                            key={m}
                            type="button"
                            className={cn(
                              'rounded-full px-4 py-2 text-xs font-semibold',
                              i === 0
                                ? 'bg-gradient-brand text-white shadow-soft'
                                : 'border border-slate-200/60 dark:border-white/10',
                            )}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2 rounded-2xl bg-gradient-brand text-white p-6">
                      <div className="text-xs uppercase tracking-widest opacity-80">Order Summary</div>
                      <div className="mt-3 space-y-2 text-sm">
                        <div className="flex justify-between"><span>Application Fee</span><span>₹500</span></div>
                        <div className="flex justify-between"><span>Processing</span><span>₹0</span></div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/20 flex justify-between font-heading font-bold text-lg">
                        <span>Total</span><span>₹500</span>
                      </div>
                      <div className="mt-4 text-xs opacity-80">Secure payment · Razorpay placeholder</div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="s4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto grid place-items-center h-20 w-20 rounded-full bg-emerald-500/15 text-emerald-600 mb-6">
                      <Check className="h-9 w-9" />
                    </div>
                    <h3 className="font-heading font-bold text-3xl text-ink dark:text-white">
                      Application submitted!
                    </h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      Application ID: <span className="font-mono font-semibold">SSP-2026-00427</span>.
                      A counsellor will contact you within 30 minutes.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <Button href="/portal" icon={<Sparkles className="h-4 w-4" />}>
                        Go to Student Portal
                      </Button>
                      <Button href="/" variant="outline">
                        Back to Home
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step < 4 && (
              <div className="mt-8 flex items-center justify-between">
                <Button
                  variant="outline"
                  icon={<ArrowLeft className="h-4 w-4" />}
                  onClick={() => setStep(s => Math.max(1, s - 1))}
                  className={cn(step === 1 && 'opacity-0 pointer-events-none')}
                >
                  Back
                </Button>
                <Button
                  iconRight={<ArrowRight className="h-4 w-4" />}
                  onClick={() => setStep(s => Math.min(steps.length, s + 1))}
                >
                  {step === 3 ? 'Pay & Submit' : 'Continue'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
