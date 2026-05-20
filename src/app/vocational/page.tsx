import type { Metadata } from 'next';
import { VocationalHero } from '@/components/vocational/Hero';
import { VocationalStats } from '@/components/vocational/Stats';
import { VocationalCourses } from '@/components/vocational/Courses';
import { VocationalComparison } from '@/components/vocational/Comparison';
import { VocationalPathway } from '@/components/vocational/Pathway';
import { WhyVocational } from '@/components/vocational/WhyVocational';
import { FutureCareer } from '@/components/vocational/FutureCareer';
import { VocationalContact } from '@/components/vocational/Contact';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Sri Sai Vocational Junior College — Paramedical Courses After 10th',
  description:
    'Sri Sai Vocational Junior College, Shadnagar — vocational paramedical courses (M.L.T and M.P.H.W.) for students after 10th class. 100% job opportunities and pathways to higher education.',
  keywords: [
    'vocational paramedical courses in Shadnagar',
    'medical lab technician course after 10th',
    'MPHW female course Telangana',
    'vocational healthcare education',
    'healthcare courses after 10th',
    'best vocational college in Rangareddy',
    'paramedical course after 10th fail',
    'Sri Sai Vocational Junior College',
    'M.L.T. course Shadnagar',
    'M.P.H.W. female Telangana',
    'NEET EAMCET bridge course',
  ],
  alternates: { canonical: '/vocational' },
  openGraph: {
    title: 'Sri Sai Vocational Junior College — Paramedical Courses After 10th',
    description:
      'Career-focused vocational paramedical courses for students after 10th — Shadnagar, Telangana. 100% job opportunities.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <VocationalHero />
      <VocationalStats />
      <VocationalCourses />
      <VocationalComparison />
      <VocationalPathway />
      <WhyVocational />
      <FutureCareer />
      <CTA />
      <VocationalContact />
    </>
  );
}
