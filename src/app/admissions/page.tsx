import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Admission } from '@/components/home/Admission';
import { ContactSection } from '@/components/home/ContactSection';
import { FAQSection } from '@/components/home/FAQSection';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Award, BadgePercent, Download, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Admissions 2026 are open. Step-by-step process, scholarships, fees, eligibility — everything you need to join Sri Sai.',
};

const scholarships = [
  { icon: GraduationCap, title: 'Merit Scholarship', desc: 'Up to 50% fee waiver for top performers in 10+2 board exams.' },
  { icon: BadgePercent, title: 'Need-Based Aid', desc: 'Financial assistance for students from low-income families.' },
  { icon: Award, title: 'Sports & Talent', desc: 'For state / national-level achievers in sports and cultural events.' },
  { icon: GraduationCap, title: 'Women in Healthcare', desc: 'Dedicated scholarship for women joining paramedical sciences.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026"
        title="Join the 2026 batch of"
        highlight="future healthcare heroes."
        subtitle="A transparent, supportive admissions process built around you. Apply online, talk to a counsellor and secure your seat in under a week."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Admissions' }]}
      />
      <Admission />

      <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]" id="scholarships">
        <div className="container-page">
          <Reveal>
            <span className="section-eyebrow">
              <span className="h-1 w-6 rounded-full bg-gradient-brand" /> Scholarships
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4 max-w-3xl">
              Talent should never be priced out of <span className="text-gradient">healthcare.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Sri Sai offers a suite of scholarships and government-scheme assistance — covering merit, need, sport, women in STEM and more.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {scholarships.map(s => (
              <Reveal key={s.title}>
                <div className="rounded-3xl glass p-7 hover:-translate-y-1 hover:shadow-soft transition-all duration-500">
                  <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading font-semibold text-lg text-ink dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/apply">Apply Now</Button>
            <Button href="#" variant="outline" icon={<Download className="h-4 w-4" />}>
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactSection />
    </>
  );
}
