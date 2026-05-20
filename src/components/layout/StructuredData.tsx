import { site } from '@/lib/site';

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: site.name,
    alternateName: 'Sri Sai Paramedical College, Shadnagar',
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: [site.phone, site.phoneSecondary],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressLocality: 'Shadnagar',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    sameAs: Object.values(site.social),
    foundingDate: '2010',
    department: [
      'Diploma in Medical Lab Technician (DMLT)',
      'Diploma in Multipurpose Health Assistant (Male) (DMPHA-M)',
      'Diploma in Anesthesia Technician (DANS)',
      'Diploma in ECG Technician (DECG)',
      'Diploma in Ophthalmology (DOM)',
      'Diploma in Medical Imaging Technician (DMIT)',
      'Diploma in Medical Sterilization & Operation Theatre Technician (DMST)',
      'Diploma in Cardiac Lab Technician (DCLT)',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
