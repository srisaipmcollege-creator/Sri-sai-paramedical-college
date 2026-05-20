'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Input, Select, Textarea } from '@/components/ui/Field';
import { vocational, vocationalCourses } from '@/lib/vocational';
import { site } from '@/lib/site';

export function VocationalContact() {
  const [sent, setSent] = useState(false);
  const wa = vocational.whatsapp.replace(/\D/g, '');

  return (
    <section className="relative py-24 md:py-32" id="contact">
      <div className="container-page">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Talk to Sri Sai"
          highlight="Vocational Admissions."
          subtitle="Reach our Parigi Road campus on WhatsApp, phone or by visiting us. Our team responds within 30 minutes during working hours."
          center
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass p-7 md:p-9"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Inquiry Form
            </div>
            <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-ink dark:text-white">
              Request a callback
            </h3>

            <form
              onSubmit={e => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-7 grid sm:grid-cols-2 gap-4"
            >
              <Input label="Full Name" placeholder="Your full name" required />
              <Input label="Phone" placeholder={vocational.phone} required type="tel" />
              <Input label="Email" placeholder="you@email.com" type="email" />
              <Select label="Interested Course" defaultValue="">
                <option value="" disabled>
                  Select a course
                </option>
                {vocationalCourses.map(c => (
                  <option key={c.slug} value={c.slug}>
                    {c.code} — {c.title}
                  </option>
                ))}
              </Select>
              <Select label="10th Status" defaultValue="">
                <option value="" disabled>Select status</option>
                <option>10th Passed</option>
                <option>10th Failed</option>
                <option>Appearing</option>
              </Select>
              <Input label="School / Board" placeholder="e.g. SSC / CBSE / ICSE" />
              <div className="sm:col-span-2">
                <Textarea label="Message (optional)" placeholder="Tell us your career goals…" />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  By submitting, you agree to be contacted by our admissions team.
                </div>
                <Button type="submit" iconRight={<Sparkles className="h-4 w-4" />}>
                  {sent ? 'Submitted!' : 'Request Callback'}
                </Button>
              </div>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="sm:col-span-2 flex items-center gap-2 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-4 py-3 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Thank you! A counsellor will reach you shortly.
                </motion.div>
              )}
            </form>
          </motion.div>

          <div className="lg:col-span-5 space-y-5">
            <motion.a
              href={`https://wa.me/${wa}?text=${encodeURIComponent('Hi Sri Sai Vocational Junior College — I’d like to know more about admissions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group block rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-[#25D366] text-white shadow-soft">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-heading font-semibold">WhatsApp Chat</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Instant answers — typing now</div>
                  <div className="mt-2 text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {vocational.phone}
                  </div>
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand text-white shadow-soft">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-heading font-semibold">Call Admissions</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Mon – Sat · 9 AM to 7 PM</div>
                  <div className="mt-3 space-y-1.5">
                    <a
                      href={`tel:${vocational.phone.replace(/\s/g, '')}`}
                      className="block text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                    >
                      {vocational.phone}
                    </a>
                    <a
                      href={`tel:${vocational.phoneSecondary.replace(/\s/g, '')}`}
                      className="block text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                    >
                      {vocational.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.a
              href={`mailto:${site.email}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group block rounded-3xl glass p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-brand-500 text-white shadow-soft">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-heading font-semibold">Email</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Reply within 4 working hours</div>
                  <div className="mt-2 text-sm font-semibold text-brand-600 dark:text-brand-400">{site.email}</div>
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl glass p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-ink text-white dark:bg-white dark:text-ink shadow-soft">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-heading font-semibold">Visit Vocational Campus</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {vocational.address}<br />
                    {vocational.district}
                  </div>
                </div>
              </div>
              <div className="mt-5 aspect-[16/9] rounded-2xl overflow-hidden">
                <iframe
                  title="Sri Sai Vocational Junior College — Parigi Road, Shadnagar"
                  src="https://www.google.com/maps?q=Parigi+Road%2C+Shadnagar%2C+Rangareddy+District%2C+Telangana&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
