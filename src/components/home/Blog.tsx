'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { InfraImage } from '@/components/ui/InfraImage';
import { posts } from '@/lib/data';

export function Blog() {
  return (
    <section className="relative py-24 md:py-32" id="blog">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="From the Journal"
            title="Insights for"
            highlight="future clinicians."
            subtitle="Career guides, technology trends, internship tips and scholarship news — written by our faculty and alumni."
          />
          <Button href="/blog" variant="outline">
            Read the Blog
          </Button>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-5">
          <FeaturedPost post={posts[0]} />
          <div className="lg:col-span-5 space-y-5">
            {posts.slice(1, 4).map((p, i) => (
              <CompactPost key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedPost({ post }: { post: (typeof posts)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-7 group relative overflow-hidden rounded-3xl glass"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 via-teal-500/30 to-gold-400/20" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <InfraImage
            src={post.image}
            alt={post.title}
            sizes="(max-width:1024px) 100vw, 60vw"
            className="transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[10px] uppercase tracking-widest font-semibold text-brand-600 shadow-soft">
            Featured · {post.category}
          </span>
        </div>
        <div className="p-7">
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </div>
          <h3 className="mt-3 font-heading font-bold text-2xl md:text-3xl text-ink dark:text-white leading-tight">
            {post.title}
          </h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{post.excerpt}</p>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
            Read article <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function CompactPost({ post, index }: { post: (typeof posts)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group rounded-3xl glass p-5 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-500"
    >
      <Link href={`/blog/${post.slug}`} className="flex gap-4">
        <div className="relative h-24 w-28 rounded-2xl overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 via-teal-500/30 to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <InfraImage
            src={post.image}
            alt={post.title}
            sizes="112px"
            className="transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <div className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">
            {post.category}
          </div>
          <h4 className="mt-1 font-heading font-semibold text-sm md:text-base text-ink dark:text-white leading-snug line-clamp-2">
            {post.title}
          </h4>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <Clock className="h-3 w-3" /> {post.readTime}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
