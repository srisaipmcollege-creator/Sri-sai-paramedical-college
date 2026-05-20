'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
    alt: 'Student in the medical lab — microscopy training',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop',
    alt: 'Paramedical professional at work',
  },
  {
    src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=900&q=80&auto=format&fit=crop',
    alt: 'Radiology and imaging training',
  },
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=80&auto=format&fit=crop',
    alt: 'Operation theatre simulation',
  },
];

const INTERVAL_MS = 5000;

export function AnimatedHeroPhoto({ className }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(prev => (prev + 1) % photos.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 7, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <Image
            src={photos[i].src}
            alt={photos[i].alt}
            fill
            sizes="(max-width:1024px) 100vw, 40vw"
            className="object-cover"
            priority={i === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {photos.map((_, idx) => (
          <span
            key={idx}
            className={cn(
              'h-1 rounded-full bg-white/40 transition-all duration-500',
              idx === i ? 'w-6 bg-white' : 'w-1.5',
            )}
          />
        ))}
      </div>
    </div>
  );
}
