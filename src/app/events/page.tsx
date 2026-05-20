import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Events } from '@/components/home/Events';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Events & News',
  description:
    'Workshops, medical camps, recruiter drives and guest lectures — explore upcoming events at Sri Sai.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Events & News"
        title="Workshops, camps,"
        highlight="and recruiter drives."
        subtitle="The Sri Sai calendar is built for exposure — from medical camps to AI-in-diagnostics symposiums, there's always something happening."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Events & News' }]}
      />
      <Events />
      <CTA />
    </>
  );
}
