'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

const pillars = [
  { icon: Eye, title: 'Our Vision', text: 'To be Telangana\'s most trusted paramedical institution — known for practical training, career outcomes and integrity.' },
  { icon: Target, title: 'Our Mission', text: 'Prepare students for successful careers in government and private healthcare sectors through hands-on learning, hospital exposure and 100% job guidance.' },
  { icon: Sparkles, title: 'Our Philosophy', text: 'Quality healthcare education through practical learning, experienced faculty and career-focused training programs.' },
];

const checks = [
  'Affiliated to Telangana Paramedical Board',
  '100% job guidance — Government & Private institutions',
  'Practical training with modern medical equipment',
  'Self-employment guidance for diagnostic & optical centres',
];

export function About() {
  return (
    <section className="relative py-24 md:py-32" id="about">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="About Sri Sai"
              title="Quality healthcare education,"
              highlight="career-focused outcomes."
              subtitle="Sri Sai Paramedical College is committed to providing quality healthcare education through practical learning, experienced faculty, hospital exposure and career-focused training programs — preparing students for successful careers in government and private healthcare sectors."
            />

            <ul className="mt-8 space-y-3">
              {checks.map((c, i) => (
                <Reveal key={c} delay={0.05 * i}>
                  <li className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                    {c}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/about" iconRight={<ArrowRight className="h-4 w-4" />}>
                  Read Our Story
                </Button>
                <Button href="/admissions" variant="outline">
                  Admission 2026
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <Message
                  name="B. Rajender Singh"
                  role="Chairman"
                  quote="Paramedical education is the foundation of a stronger healthcare system — we build that foundation, one student at a time."
                  avatar="RS"
                />
                <Message
                  name="B. Madhuri"
                  role="Correspondent"
                  quote="Our students don't just learn theory — they leave us ready for real hospitals and real careers."
                  avatar="BM"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl glass p-7 ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-brand opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-ink dark:text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="sm:col-span-2 rounded-3xl glass p-7"
            >
              <h3 className="font-heading font-semibold text-xl text-ink dark:text-white">Why Sri Sai</h3>
              <div className="mt-6 relative">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-teal-500 to-gold-400" />
                <ul className="space-y-5">
                  {[
                    { y: 'Affiliation', t: 'Affiliated to the Telangana Paramedical Board.' },
                    { y: 'Programs', t: '8 career-focused paramedical diplomas, all 2-year duration.' },
                    { y: 'Placements', t: '100% job guidance across government and private healthcare.' },
                    { y: 'Self-Employment', t: 'Support to start your own diagnostic centre, optical shop or service.' },
                  ].map((m, i) => (
                    <li key={m.y} className="relative pl-10">
                      <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-brand text-white text-[10px] font-semibold grid place-items-center shadow-soft">
                        {i + 1}
                      </span>
                      <div className="font-heading font-semibold text-sm text-brand-600 dark:text-brand-400">
                        {m.y}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{m.t}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Message({ name, role, quote, avatar }: { name: string; role: string; quote: string; avatar: string }) {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-gradient-brand text-white grid place-items-center font-heading font-semibold">
          {avatar}
        </div>
        <div>
          <div className="font-heading font-semibold text-sm">{name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{role}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">“{quote}”</p>
    </div>
  );
}
