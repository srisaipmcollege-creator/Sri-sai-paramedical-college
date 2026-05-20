'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders a remote image (e.g. from Unsplash) and silently falls back to nothing
 * if the network fetch fails — so the underlying gradient placeholder remains visible.
 */
export function InfraImage({ src, alt, className, sizes = '(max-width:768px) 100vw, 33vw', priority }: Props) {
  const [ok, setOk] = useState(Boolean(src));

  if (!src || !ok) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setOk(false)}
      className={cn('object-cover', className)}
    />
  );
}
