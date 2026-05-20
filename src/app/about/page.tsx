import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { About } from '@/components/home/About';
import { WhyChoose } from '@/components/home/WhyChoose';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    '15+ years of paramedical excellence. Learn about the vision, mission and values that drive Sri Sai Paramedical College.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Sri Sai"
        title="A modern paramedical campus,"
        highlight="built around healthcare."
        subtitle="We started in 2010 with a single conviction — India's healthcare system needs more than doctors. It needs technologists, technicians and frontline professionals trained for real hospitals."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />
      <About />
      <WhyChoose />
      <CTA />
    </>
  );
}
