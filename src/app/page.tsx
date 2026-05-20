import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { About } from '@/components/home/About';
import { WhyChoose } from '@/components/home/WhyChoose';
import { CoursesSection } from '@/components/home/CoursesSection';
import { Infrastructure } from '@/components/home/Infrastructure';
import { Labs } from '@/components/home/Labs';
import { Placements } from '@/components/home/Placements';
import { Careers } from '@/components/home/Careers';
import { VocationalBanner } from '@/components/home/VocationalBanner';
import { Testimonials } from '@/components/home/Testimonials';
import { Partners } from '@/components/home/Partners';
import { Admission } from '@/components/home/Admission';
import { Gallery } from '@/components/home/Gallery';
import { Events } from '@/components/home/Events';
import { Blog } from '@/components/home/Blog';
import { FAQSection } from '@/components/home/FAQSection';
import { ContactSection } from '@/components/home/ContactSection';
import { CTA } from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <WhyChoose />
      <CoursesSection />
      <VocationalBanner />
      <Infrastructure />
      <Labs />
      <Careers />
      <Placements />
      <Testimonials />
      <Partners />
      <Admission />
      <Gallery />
      <Events />
      <Blog />
      <FAQSection />
      <CTA />
      <ContactSection />
    </>
  );
}
