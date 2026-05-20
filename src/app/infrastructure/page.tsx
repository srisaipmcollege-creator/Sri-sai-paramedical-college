import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Infrastructure } from '@/components/home/Infrastructure';
import { Labs } from '@/components/home/Labs';
import { CTA } from '@/components/home/CTA';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { infrastructure } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Infrastructure',
  description:
    'A 4.5-acre paramedical campus with 12+ specialty labs, smart classrooms, hostel, library and modern auditorium.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="A campus engineered for"
        highlight="clinical learning."
        subtitle="Every space — from labs to hostels — is designed to support immersive, hospital-grade education."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Infrastructure' }]}
      />
      <Infrastructure />
      <Labs />

      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <SectionHeader
            eyebrow="Every Facility"
            title="A complete"
            highlight="paramedical ecosystem."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {infrastructure.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.03}>
                <div className="group rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500">
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">
                    {it.tag}
                  </div>
                  <h3 className="mt-2 font-heading font-semibold text-lg text-ink dark:text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
