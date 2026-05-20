'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell, BookOpen, Calendar, ChevronRight, CreditCard, GraduationCap,
  LogIn, MessageCircle, Sparkles, TrendingUp, User, Video,
} from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Input } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Student Portal"
        title="Your"
        highlight="Sri Sai dashboard."
        subtitle="Attendance, fees, classes, LMS, notifications and placement updates — everything in one place."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Student Portal' }]}
      />

      <section className="pb-24">
        <div className="container-page max-w-6xl">
          {!auth ? (
            <div className="grid lg:grid-cols-12 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 rounded-3xl glass-strong p-8 md:p-10 shadow-soft"
              >
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft">
                  <LogIn className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-heading font-bold text-2xl text-ink dark:text-white">
                  Sign in to your portal
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Use your student ID and the password sent via email.
                </p>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    setAuth(true);
                  }}
                  className="mt-7 space-y-4"
                >
                  <Input label="Student ID" placeholder="SSP-2024-1234" required />
                  <Input label="Password" type="password" placeholder="••••••••" required />
                  <Button type="submit" fullWidth iconRight={<ChevronRight className="h-4 w-4" />}>
                    Sign In
                  </Button>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <a href="#" className="hover:text-brand-600">Forgot password?</a>
                    <span>SSO · OTP placeholder</span>
                  </div>
                </form>
              </motion.div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, t: 'Classes & LMS', d: 'Live timetable, recordings and notes.' },
                  { icon: TrendingUp, t: 'Attendance', d: 'Daily and subject-wise attendance tracker.' },
                  { icon: CreditCard, t: 'Fees & Payments', d: 'Receipts, due dates, instant pay.' },
                  { icon: Calendar, t: 'Calendar', d: 'Exams, holidays, events and viva slots.' },
                  { icon: GraduationCap, t: 'Internships', d: 'Apply to hospital rotations.' },
                  { icon: Bell, t: 'Notifications', d: 'Faculty announcements and alerts.' },
                ].map((f, i) => (
                  <motion.div
                    key={f.t}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-3xl glass p-6"
                  >
                    <div className="grid place-items-center h-10 w-10 rounded-2xl bg-gradient-brand text-white">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <div className="mt-4 font-heading font-semibold text-base">{f.t}</div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">{f.d}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <Dashboard />
          )}
        </div>
      </section>
    </>
  );
}

function Dashboard() {
  return (
    <div className="grid lg:grid-cols-12 gap-5">
      <aside className="lg:col-span-3 rounded-3xl glass p-5 h-fit lg:sticky lg:top-28">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-brand text-white grid place-items-center font-heading font-bold">
            PS
          </div>
          <div>
            <div className="font-heading font-semibold text-sm">Priya S.</div>
            <div className="text-xs text-slate-500">DMLT · Year 2</div>
          </div>
        </div>
        <nav className="mt-6 space-y-1">
          {[
            { icon: User, l: 'Overview', active: true },
            { icon: BookOpen, l: 'Classes' },
            { icon: TrendingUp, l: 'Attendance' },
            { icon: CreditCard, l: 'Fees' },
            { icon: Calendar, l: 'Calendar' },
            { icon: Video, l: 'LMS' },
            { icon: MessageCircle, l: 'Inbox' },
          ].map(n => (
            <button
              key={n.l}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                n.active
                  ? 'bg-gradient-brand text-white shadow-soft'
                  : 'hover:bg-ink/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
              }`}
            >
              <n.icon className="h-4 w-4" />
              {n.l}
            </button>
          ))}
        </nav>
      </aside>

      <main className="lg:col-span-9 space-y-5">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { l: 'Attendance', v: '92%', icon: TrendingUp },
            { l: 'Pending Fees', v: '₹0', icon: CreditCard },
            { l: 'Next Class', v: '11:00 AM', icon: BookOpen },
          ].map(s => (
            <div key={s.l} className="rounded-3xl glass p-5 flex items-center gap-4">
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500">{s.l}</div>
                <div className="font-heading font-bold text-2xl text-ink dark:text-white">{s.v}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-3xl glass p-7">
            <div className="flex items-center justify-between">
              <div className="font-heading font-semibold text-lg">Today's Classes</div>
              <button className="text-xs font-semibold text-brand-600">View all</button>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { t: '09:00 – 10:00', s: 'Clinical Biochemistry', f: 'Dr. Lakshmi Iyer' },
                { t: '11:00 – 12:30', s: 'Histopathology Lab', f: 'Prof. Mohan Reddy' },
                { t: '14:00 – 15:30', s: 'Immunology', f: 'Dr. Anil Mathew' },
              ].map(c => (
                <div key={c.s} className="flex items-center gap-4 rounded-2xl border border-slate-200/60 dark:border-white/10 p-4">
                  <div className="font-heading font-bold text-sm text-brand-600 dark:text-brand-400 w-28">{c.t}</div>
                  <div className="flex-1">
                    <div className="font-heading font-semibold text-sm">{c.s}</div>
                    <div className="text-xs text-slate-500">{c.f}</div>
                  </div>
                  <button className="text-xs font-semibold text-brand-600">Join</button>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl glass p-7">
            <div className="text-xs uppercase tracking-widest text-brand-600 font-semibold">Announcement</div>
            <div className="mt-2 font-heading font-semibold text-base">Placement Drive · Apollo Diagnostics</div>
            <div className="mt-2 text-xs text-slate-500">Aug 14, 9 AM · Auditorium A</div>
            <Button className="mt-5" fullWidth iconRight={<Sparkles className="h-4 w-4" />}>
              Register
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
