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
  <section className="relative flex h-[800px] flex-col justify-center max-md:h-[700px]">
    <section className="relative h-[100px] bg-black">
      <Image
        className="absolute top-0 right-0 h-[132px] w-full object-cover max-md:h-[150px] max-md:object-contain"
        src="/images/web-hosting/hero-t.svg"
        alt="hero-t"
        width={1440}
        height={100}
        unoptimized
      />
    </section>
    <section className="relative flex h-full flex-col bg-[#FFF4E1]">
      <div className="container !mt-[80px] flex flex-col gap-20 max-md:gap-10">
        <Title
          as="h1"
          color="black"
          weight={400}
          className="w-[90%] text-[112px] leading-[80%] tracking-[1.12px] break-words max-[1300px]:w-full max-md:leading-[48px]"
          uppercase
        >
          {title}
        </Title>
        <div className="ml-auto flex w-[70%] flex-col gap-2 max-[1300px]:w-full">
          <Title size="5xl" color="black" weight={500}>
            {subtitle}
          </Title>
          <Text size="xl" color="black" weight={500} className="opacity-30">
            {text}
          </Text>
        </div>
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[132px] w-full object-cover max-md:h-[150px]"
        src="/images/web-hosting/hero-b.svg"
        alt="hero-b"
        width={1440}
        height={100}
        unoptimized
      />
    </section>
  </section>
);
