'use client';

import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, Twitter } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/site';

const links = {
  Explore: [
    { label: 'About Us', href: '/about' },
    { label: 'Paramedical Courses', href: '/courses' },
    { label: 'Vocational Junior College', href: '/vocational' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Placements', href: '/placements' },
    { label: 'Faculty', href: '/faculty' },
  ],
  Campus: [
    { label: 'Infrastructure', href: '/infrastructure' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Events & News', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Student: [
    { label: 'Student Portal', href: '/portal' },
    { label: 'Apply Online', href: '/apply' },
    { label: 'Download Brochure', href: '#' },
    { label: 'Scholarships', href: '/admissions#scholarships' },
    { label: 'FAQs', href: '/contact#faqs' },
  ],
};

const socials = [
  { icon: Instagram, href: site.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: site.social.facebook, label: 'Facebook' },
  { icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: site.social.youtube, label: 'YouTube' },
  { icon: Twitter, href: site.social.twitter, label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden mt-24 border-t border-slate-200/60 dark:border-white/10 bg-gradient-to-b from-white to-cloud dark:from-[#070B16] dark:to-[#05080F]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-aurora opacity-50 pointer-events-none" />

      <div className="container-page relative pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-md text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sri Sai Paramedical College, Shadnagar — career-focused paramedical education with practical training, hospital exposure and 100% job guidance in government and private healthcare sectors. Affiliated to the Telangana Paramedical Board.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-brand-600">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <a href={`tel:${site.phoneSecondary.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-brand-600">
                <Phone className="h-4 w-4" /> {site.phoneSecondary}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-brand-600">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
              <div className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {site.address}<br />
                  {site.district}
                </span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center h-10 w-10 rounded-full border border-slate-200/60 dark:border-white/10 hover:border-brand-500 hover:text-brand-600 transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-heading text-sm font-semibold text-ink dark:text-white">{title}</h4>
                <ul className="mt-4 space-y-3">
                  {items.map(item => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-semibold text-ink dark:text-white">Stay in the loop</h4>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Get admissions alerts, scholarship news and career resources — once a month, no spam.
            </p>
            <form className="mt-5 group relative">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-full bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 pl-5 pr-14 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 h-9 w-10 rounded-full bg-gradient-brand text-white grid place-items-center hover:shadow-glow transition-shadow"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 rounded-2xl glass p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                Affiliation
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Affiliated to Telangana Paramedical Board
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-brand-600">Privacy</Link>
            <Link href="#" className="hover:text-brand-600">Terms</Link>
            <Link href="#" className="hover:text-brand-600">Refund Policy</Link>
            <Link href="#" className="hover:text-brand-600">Anti-Ragging</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
