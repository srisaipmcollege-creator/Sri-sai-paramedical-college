import type { MetadataRoute } from 'next';
import { courses } from '@/lib/data';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: MetadataRoute.Sitemap = [
    '',
    'about',
    'courses',
    'vocational',
    'admissions',
    'placements',
    'faculty',
    'infrastructure',
    'gallery',
    'events',
    'blog',
    'contact',
    'portal',
    'apply',
  ].map(p => ({
    url: `${site.url}/${p}`.replace(/\/$/, '') || site.url,
    lastModified,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = courses.map(c => ({
    url: `${site.url}/courses/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...courseRoutes];
}
