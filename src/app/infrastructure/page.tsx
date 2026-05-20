import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Infrastructure } from '@/components/home/Infrastructure';
import { Labs } from '@/components/home/Labs';
import { CTA } from '@/components/home/CTA';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { InfraImage } from '@/components/ui/InfraImage';
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
                <article className="group rounded-3xl glass overflow-hidden hover:-translate-y-1 hover:shadow-soft transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 via-teal-500/20 to-transparent" />
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <InfraImage
                      src={it.image}
                      alt={it.title}
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest font-semibold text-brand-600 shadow-soft">
                      {it.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-ink dark:text-white">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {it.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
