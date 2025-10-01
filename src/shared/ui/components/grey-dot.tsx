'use client';

import { cn } from '@/shared/lib/utils/cn';

export const GreyDot = ({ className }: { className?: string }) => (
  <span className={cn('h-1 w-1 bg-[#A4A189]', className)} />
);
