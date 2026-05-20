import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { FacultyCard } from '@/components/ui/FacultyCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTA } from '@/components/home/CTA';
import { faculty } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Faculty',
  description:
    'Meet senior clinicians, PhD-qualified educators and visiting specialists who shape every Sri Sai graduate.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="The minds behind"
        highlight="every clinician we shape."
        subtitle="Practicing physicians, PhD researchers and senior technologists — our faculty bring the hospital into the classroom."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Faculty' }]}
      />

      <section className="relative py-16 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Department Heads & Senior Faculty"
            title="A team that"
            highlight="practices what it teaches."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {faculty.map((f, i) => (
              <FacultyCard key={f.name} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
