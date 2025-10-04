'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const PageHero = ({
  title,
  subtitle,
  text,
}: {
  title: ReactNode;
  subtitle: string;
  text: string;
}) => (
  <section className="relative flex h-[900px] flex-col justify-center max-[1300px]:h-[1000px] max-md:h-[900px]">
    <section className="relative flex h-full flex-col">
      <div className="container !mt-[40px] flex flex-col gap-20 max-md:gap-10">
        <Title
          as="h1"
          weight={400}
          className="w-[90%] text-[112px] leading-[80%] tracking-[1.12px] break-words max-[1300px]:w-full max-md:leading-[48px]"
          uppercase
        >
          {title}
        </Title>
        <div className="flex items-end justify-between max-md:gap-10">
          <LineUpIcon />
          <div className="flex w-[70%] flex-col gap-2 max-[1300px]:w-full">
            <Title size="5xl" weight={500}>
              {subtitle}
            </Title>
            <Text size="xl" weight={500} className="opacity-30">
              {text}
            </Text>
          </div>
        </div>
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[132px] w-full object-cover max-md:h-[150px]"
        src="/images/page-hero.svg"
        alt="hero-b"
        width={1440}
        height={100}
        unoptimized
      />
    </section>
  </section>
);

const LineUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="50"
    height="57"
    viewBox="0 0 50 57"
    fill="none"
    className="max-[1300px]:hidden max-md:flex"
  >
    <rect width="50" height="57" fill="url(#pattern0_170_15588)" />
    <defs>
      <pattern
        id="pattern0_170_15588"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_170_15588" transform="scale(0.02 0.0175439)" />
      </pattern>
      <image
        id="image0_170_15588"
        width="50"
        height="57"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA5CAYAAAB0+HhyAAAAAXNSR0IArs4c6QAAAeRJREFUaEPtmk1LAlEUhs+5GYZ9+BNa1LZFi8Bt0DZaRjCNI0VBtWhTI63c5QRFm9rqqPUrAnf+jXLRWkgSC/HERIExmty5c0eU42Zghvc99zwPuLoIE/LDCdkDJnORSsE57TVkZOzbcTH2x0ildFUAIuv78IhFwzzP8CIRE+hnZOPHyNPYGvEWKBXzx97TtLJ3EUNVGuf71+JFlHiqh9mIOsNwG9hIuDzV29iIOsNwG9hIuDzV29iIOsNwG9hIuDzV29iIOsNwG3xGKq5z5I0w0vZ9uKP0tvEievnKt7MReWZ6E2xEL1/5djYiz0xvgo3o5SvfzkbkmelNsBG9fOXbJ9dI2b3cRxJJw7Kv5bmMLuEz8uA66wSwY6Ttg9EdS36yb5FqNRd7rc/UumJq2zTPnuUrR5Poe2Gg7OYPkWDFsLInozmW/NSBNx/KxfwNCmwbpn0hXxt94t8rHGXXyQmANSB4nBai1vn4bM2KWGvQMd+7nUQsORePN9uNFsB8AqD5++zN9Hvnfd/as5tBEQy9i1IpOCkUuElAqwSwBECNQcMQ8IUIOoC0LAjfukgLCFgnoMXeTL933vfddDalbZGgxVHnhhqJ+kBB5/EiQcnpyrERXWSD9rKRoOR05diILrJBe78AXLnpOk1S3FwAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);
