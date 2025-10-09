'use client';

import { Title } from '@/shared/ui/kit/title';

export const ArticleSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <section className="flex flex-col gap-2.5 rounded bg-black/10 p-5">
    <Title size="2xl" weight={700} color="black">
      {title}
    </Title>
    {children}
  </section>
);
