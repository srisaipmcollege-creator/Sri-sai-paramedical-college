import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="relative min-h-[100svh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-50 mask-fade-b" />
      <div className="relative text-center px-6 max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium">
          <Sparkles className="h-4 w-4 text-brand-500" /> Page Not Found
        </div>
        <h1 className="mt-6 font-heading font-bold text-7xl sm:text-8xl text-gradient animate-gradient-pan">404</h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          The page you're looking for moved, or never existed. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" icon={<ArrowLeft className="h-4 w-4" />}>Back Home</Button>
          <Link href="/courses" className="btn btn-outline">Explore Courses</Link>
        </div>
      </div>
    </section>
  );
}
