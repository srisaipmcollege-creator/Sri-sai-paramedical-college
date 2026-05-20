import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { CoursesSection } from '@/components/home/CoursesSection';
import { Admission } from '@/components/home/Admission';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Explore paramedical diplomas and degrees — DMLT, MLT, OTT, Dialysis, X-Ray, ECG, EMT and Nursing Assistant programs at Sri Sai.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Career-aligned"
        highlight="paramedical courses."
        subtitle="From diagnostics to emergency response — every program at Sri Sai is shaped by hospital workflows and built around hands-on practice."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Courses' }]}
      />
      <CoursesSection />
      <Admission />
      <CTA />
    </>
  );
}
