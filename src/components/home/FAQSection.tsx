'use client';

import { Accordion } from '@/components/ui/Accordion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { faqs } from '@/lib/data';

export function FAQSection() {
  return (
    <section className="relative py-24 md:py-32 bg-cloud/60 dark:bg-white/[0.015]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Frequently Asked"
              title="Quick answers to"
              highlight="common questions."
              subtitle="Still curious? Our admissions team replies on WhatsApp within minutes — talk to a real human."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">Talk to Admissions</Button>
              <Button href="/contact#faqs" variant="outline">
                View All FAQs
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
