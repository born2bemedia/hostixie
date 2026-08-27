'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const FeatureHero = ({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) => (
  <section className="relative flex flex-col bg-[#FFF4E1]">
    <div className="relative h-[132px] w-full shrink-0 overflow-hidden bg-black max-md:h-[120px]">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/web-hosting/hero-t.svg"
        alt=""
        width={1440}
        height={132}
        unoptimized
        aria-hidden
      />
    </div>

    <div className="relative z-10 container flex flex-col gap-20 pt-16 pb-[180px] max-lg:gap-12 max-lg:pt-20 max-md:gap-10 max-md:pt-12 max-md:pb-[160px]">
      <Title
        as="h1"
        color="black"
        weight={400}
        className="w-[90%] text-[112px] leading-[80%] tracking-[1.12px] break-words max-[1300px]:w-full max-lg:text-[72px] max-lg:leading-[85%] max-md:text-[52px] max-md:leading-[48px]"
        uppercase
      >
        {title}
      </Title>
      <div className="ml-auto flex w-[70%] flex-col gap-2 max-[1300px]:w-full">
        <Title size="5xl" color="black" weight={500}>
          {subtitle}
        </Title>
<Text size="xl" color="muted" weight={500}>
            {text}
          </Text>
      </div>
    </div>

    <Image
      className="pointer-events-none absolute bottom-0 left-0 z-0 h-[132px] w-full object-cover max-md:h-[150px]"
      src="/images/web-hosting/hero-b.svg"
      alt=""
      width={1440}
      height={100}
      unoptimized
      aria-hidden
    />
  </section>
);
