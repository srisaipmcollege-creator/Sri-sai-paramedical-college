import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Placements } from '@/components/home/Placements';
import { Partners } from '@/components/home/Partners';
import { Testimonials } from '@/components/home/Testimonials';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Placements',
  description:
    '95% placement support across paramedical programs. 120+ hiring partners, dedicated placement cell and structured career growth.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Placements"
        title="From classroom to"
        highlight="career launchpad."
        subtitle="Sri Sai's placement cell partners with 120+ hospitals, diagnostic chains and emergency services. 95% of eligible students secure offers — many before graduation."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Placements' }]}
      />
      <Placements />
      <Partners />
      <Testimonials />
      <CTA />
    </>
  );
}
