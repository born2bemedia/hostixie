'use client';

import type { ReactNode } from 'react';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';

export const LargeActionBtn = ({
  children,
  href,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <Link href={href}>
    <button
      className={cn(
        'w-full cursor-pointer bg-[rgba(255,244,225,0.1)] py-9 text-center text-[18.281px] leading-[26px] font-bold tracking-[0.2px] text-[#FFF4E1] max-md:py-5',
        className,
      )}
    >
      {children}
    </button>
  </Link>
);
