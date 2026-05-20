'use client';

import { Marquee } from '@/components/ui/Marquee';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { partners } from '@/lib/data';

export function Partners() {
  const half = Math.ceil(partners.length / 2);
  const top = partners.slice(0, half);
  const bottom = partners.slice(half);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Hospital & Industry Partners"
          title="Where our students"
          highlight="learn, intern and build careers."
          subtitle="From multi-specialty hospitals to leading diagnostic chains — our network spans the institutions shaping Indian healthcare."
          center
        />
      </div>

      <div className="mt-14 space-y-6 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#070B16] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#070B16] to-transparent z-10 pointer-events-none" />

        <Marquee speed="slow">
          {top.map(p => (
            <PartnerPill key={p} name={p} />
          ))}
        </Marquee>
        <Marquee speed="slow" reverse>
          {bottom.map(p => (
            <PartnerPill key={p} name={p} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function PartnerPill({ name }: { name: string }) {
  return (
    <div className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl glass min-w-[14rem] justify-center transition-transform hover:-translate-y-0.5">
      <span className="h-2 w-2 rounded-full bg-gradient-brand" />
      <span className="font-heading font-semibold text-sm tracking-tight text-ink dark:text-white">{name}</span>
    </div>
  );
}
