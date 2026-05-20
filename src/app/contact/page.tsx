import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContactSection } from '@/components/home/ContactSection';
import { FAQSection } from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Sri Sai Paramedical College admissions on WhatsApp, phone or email. Visit our campus or request a callback.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about"
        highlight="your career."
        subtitle="WhatsApp, phone, email, or a campus visit — choose your preferred channel. We respond within 30 minutes during working hours."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}
