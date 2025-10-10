'use client';

import React from 'react';

import { Title } from '@/shared/ui/kit/title';

export const PolicySection = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    id: string;
    title: string;
  }
>(({ children, id, title }, ref) => (
  <section
    id={id}
    ref={ref}
    className="flex flex-col gap-2.5 rounded bg-black/10 p-5"
  >
    <Title size="2xl" weight={700} color="black">
      {title}
    </Title>
    {children}
  </section>
));

PolicySection.displayName = 'PolicySection';
