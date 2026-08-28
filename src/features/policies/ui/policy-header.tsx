'use client';

import { Title } from '@/shared/ui/kit/title';

export const PolicyHeader = ({
  name,
  subtitle,
}: {
  name: string;
  subtitle?: string;
}) => {
  return (
    <header className="py-10">
      <div className="container flex flex-col gap-2.5">
        <Title
          as="h1"
          className="text-[60px] leading-[120%] max-md:text-[40px] max-md:leading-[90%] max-md:tracking-[1.12px]"
          uppercase
        >
          {name}
        </Title>
        {subtitle && (
          <p className="text-primary text-base font-bold leading-[140%] tracking-[0.32px]">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};
