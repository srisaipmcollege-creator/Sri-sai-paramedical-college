'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
};

const speedMap = {
  slow: '60s',
  normal: '40s',
  fast: '24s',
};

export function Marquee({ children, reverse, speed = 'normal', className }: Props) {
  return (
    <div className={cn('group relative overflow-hidden mask-fade-r', className)}>
      <div
        className="flex w-max gap-12 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: speedMap[speed],
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
