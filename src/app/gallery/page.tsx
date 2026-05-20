import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Gallery } from '@/components/home/Gallery';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Step inside Sri Sai — labs, workshops, events and graduation day captured in one immersive gallery.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside"
        highlight="campus life."
        subtitle="Labs, hospital rotations, workshops, sports, cultural events and graduation moments — all in one place."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />
      <Gallery />
      <CTA />
    </>
  );
}
