import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, BookOpen, Briefcase, Building2, Calendar, Clock, Download,
  GraduationCap, MessageCircle, Sparkles, TrendingUp, Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { FacultyCard } from '@/components/ui/FacultyCard';
import { courses, faculty, testimonials, faqs } from '@/lib/data';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return courses.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find(c => c.slug === slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find(c => c.slug === slug);
  if (!course) notFound();

  const Icon = course.icon;
  const related = courses.filter(c => c.slug !== course.slug && c.category === course.category).slice(0, 3);
  const wa = site.whatsapp.replace(/\D/g, '');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 aurora-bg" />
        <div className="absolute inset-0 grid-bg opacity-50 mask-fade-b" />

        <div className={`absolute -top-32 left-1/3 h-96 w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${course.color}`} />

        <div className="container-page relative">
          <nav className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="opacity-60">/</span>
            <Link href="/courses" className="hover:text-brand-600">Courses</Link>
            <span className="opacity-60">/</span>
            <span className="text-ink dark:text-white font-medium">{course.code}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="section-eyebrow">
                  <span className="h-1 w-6 rounded-full bg-gradient-brand" />
                  {course.category} · {course.code}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 font-heading font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-ink dark:text-white leading-[1.05]">
                  {course.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.hero}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/apply" iconRight={<ArrowRight className="h-4 w-4" />} size="lg">
                    Apply Now
                  </Button>
                  <Button href="#" variant="outline" size="lg" icon={<Download className="h-4 w-4" />}>
                    Download Curriculum
                  </Button>
                  <Button href={`https://wa.me/${wa}`} variant="outline" size="lg" icon={<MessageCircle className="h-4 w-4" />}>
                    Talk to Counsellor
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl glass-strong p-6 md:p-7 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className={`grid place-items-center h-16 w-16 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-soft`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                      Program at a glance
                    </div>
                    <div className="font-heading font-bold text-2xl text-ink dark:text-white">
                      {course.code}
                    </div>
                  </div>
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <Stat icon={Clock} label="Duration" value={course.duration} />
                  <Stat icon={GraduationCap} label="Eligibility" value={course.eligibility} />
                  <Stat icon={Users} label="Seats" value={`${course.seats}`} />
                  <Stat icon={BadgeCheck} label="Fees" value={course.fees} />
                </dl>

                <div className="mt-5 rounded-2xl bg-gradient-brand text-white p-5">
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Career Outlook</div>
                  <div className="mt-1 font-heading font-bold text-xl">
                    100% Job Guidance
                  </div>
                  <div className="text-xs opacity-80">Government & Private institutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Outcomes */}
      <section className="py-16">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="section-eyebrow">
                <span className="h-1 w-6 rounded-full bg-gradient-brand" /> Overview
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4">About this program</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {course.description} Our {course.code} program is built around real hospital workflows — students rotate through partner facilities, handle real equipment, and graduate with the confidence of seasoned technologists.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl glass p-7">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Learning Outcomes
              </div>
              <ul className="mt-5 space-y-3">
                {course.outcomes.map(o => (
                  <li key={o} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <Sparkles className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-20 bg-cloud/60 dark:bg-white/[0.015]">
        <div className="container-page">
          <Reveal>
            <span className="section-eyebrow">
              <span className="h-1 w-6 rounded-full bg-gradient-brand" /> Curriculum
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">A curriculum designed by clinicians.</h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {course.curriculum.map((y, i) => (
              <Reveal key={y.year} delay={i * 0.07}>
                <div className="rounded-3xl glass p-6 h-full">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-brand text-white text-sm font-heading font-bold">
                      {i + 1}
                    </div>
                    <div className="font-heading font-semibold text-lg text-ink dark:text-white">
                      {y.year}
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    {y.modules.map(m => (
                      <li key={m} className="flex items-start gap-2.5">
                        <BookOpen className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career & Salary */}
      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl glass p-7 md:p-9">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Career Opportunities
            </div>
            <h3 className="mt-3 font-heading font-bold text-2xl md:text-3xl text-ink dark:text-white">
              Where {course.code} graduates work.
            </h3>
            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {course.careers.map(c => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/60 dark:border-white/10 px-4 py-3 text-sm font-medium hover:border-brand-500 hover:text-brand-600 transition-colors"
                >
                  <Briefcase className="h-4 w-4 text-brand-500" />
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-teal-500 text-white p-7 md:p-9 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                Career Growth Path
              </div>
              <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl">
                Where {course.code} takes you.
              </h3>
              <div className="mt-7 space-y-4">
                <SalaryRow label="Entry" value={course.salary.entry} icon={Calendar} />
                <SalaryRow label="Mid-Career" value={course.salary.mid} icon={TrendingUp} />
                <SalaryRow label="Senior / Specialist" value={course.salary.senior} icon={Building2} />
              </div>
              <Button href="/placements" variant="gold" size="lg" className="mt-7" fullWidth>
                See Career Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 md:py-20 bg-cloud/60 dark:bg-white/[0.015]">
        <div className="container-page">
          <Reveal>
            <span className="section-eyebrow">
              <span className="h-1 w-6 rounded-full bg-gradient-brand" /> Faculty
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">Taught by clinicians, not just teachers.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {faculty.slice(0, 4).map((f, i) => (
              <FacultyCard key={f.name} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-eyebrow">
                <span className="h-1 w-6 rounded-full bg-gradient-brand" /> Voices
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4">From students who lived it.</h2>
            </Reveal>
            <div className="mt-8">
              <TestimonialCard {...testimonials[0]} />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="section-eyebrow">
                <span className="h-1 w-6 rounded-full bg-gradient-brand" /> Common Questions
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4">{course.code} — FAQs</h2>
            </Reveal>
            <div className="mt-8">
              <Accordion items={faqs.slice(0, 4)} />
            </div>
          </div>
        </div>
      </section>

      {/* Related courses */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-cloud/60 dark:bg-white/[0.015]">
          <div className="container-page">
            <Reveal>
              <h2 className="section-title">Related programs</h2>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(r => {
                const RIcon = r.icon;
                return (
                  <Link
                    key={r.slug}
                    href={`/courses/${r.slug}`}
                    className="group rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
                  >
                    <div className={`grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br ${r.color} text-white shadow-soft`}>
                      <RIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading font-semibold text-lg text-ink dark:text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{r.description}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 bg-gradient-to-br from-brand-600 via-brand-500 to-teal-500 text-white">
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
                  Ready to start your {course.code} journey?
                </h3>
                <p className="mt-3 text-white/80 max-w-md">
                  Limited seats for the 2026 intake. Apply online or talk to our admissions counsellor.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button href="/apply" variant="gold" size="lg" iconRight={<ArrowRight className="h-4 w-4" />}>
                  Apply Now
                </Button>
                <Button href={`https://wa.me/${wa}`} variant="ghost" size="lg" icon={<MessageCircle className="h-4 w-4" />}>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 p-4">
      <Icon className="h-4 w-4 text-brand-500" />
      <dt className="mt-2 text-[10px] uppercase tracking-widest text-slate-500">{label}</dt>
      <dd className="font-heading font-semibold text-sm text-ink dark:text-white mt-0.5">{value}</dd>
    </div>
  );
}

function SalaryRow({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/15 backdrop-blur px-4 py-3.5">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center h-9 w-9 rounded-xl bg-white/20">
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="font-heading font-bold">{value}</span>
    </div>
  );
}
