'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('contact.hero');

  return (
    <section className="relative h-[440px] max-[1280px]:h-[600px] max-md:h-[400px]">
      <div className="z-10 container flex flex-col gap-[80px]">
        <Title
          as="h1"
          className="text-[112px] leading-[80%] tracking-[1.12px] max-md:text-[60px] max-md:leading-[54px] max-md:tracking-[1.12px]"
          uppercase
        >
          {t('title', { fallback: 'Let’s Connect' })}
        </Title>
        <section className="flex items-end justify-between gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="45"
            viewBox="0 0 32 45"
            fill="none"
            className="z-0 shrink-0"
          >
            <path
              d="M32 44H6C4.66667 44 2 42.8 2 38C2 33.2 2 12 2 2"
              stroke="#FFF4E1"
            />
            <circle cx="2" cy="2.5" r="2" fill="#FFF4E1" />
          </svg>
          <Text
            size="5xl"
            weight={500}
            color="solidWhite"
            className="w-[800px] max-lg:w-full"
          >
            {t('text', {
              fallback:
                'Hostixie provides straightforward support, teamwork, and tangible success.',
            })}
          </Text>
        </section>
      </div>
      <Image
        className="absolute bottom-0 left-0 z-0 h-[132px] w-full object-cover"
        src="/images/contact/hero.png"
        alt="hero"
        width={1440}
        height={132}
        unoptimized
      />
    </section>
  );
};
