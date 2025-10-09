'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const List = ({
  values,
  textClassName,
}: {
  values: ReactNode[];
  textClassName?: string;
}) => (
  <ul className="list-disc pl-8">
    {values.map((value, i) => (
      <li
        key={i}
        className={cn('text-xl text-black max-md:text-base', textClassName)}
      >
        {value}
      </li>
    ))}
  </ul>
);
