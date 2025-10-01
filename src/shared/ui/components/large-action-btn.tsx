'use client';

import type { ReactNode } from 'react';

import { Link } from '@/i18n/navigation';

export const LargeActionBtn = ({
  children,
  href,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link href={href}>
    <button className="w-full cursor-pointer bg-[rgba(255,244,225,0.1)] py-9 text-center text-[18.281px] leading-[26px] font-bold tracking-[0.2px] text-[#FFF4E1]">
      {children}
    </button>
  </Link>
);
