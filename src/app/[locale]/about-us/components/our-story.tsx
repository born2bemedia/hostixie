'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurStory = () => {
  const t = useTranslations('companyOverview.ourStory');

  return (
    <section className="bg-[#FFF4E1] py-20">
      <div className="container flex items-stretch gap-10 max-lg:flex-col">
        <Card
          title={t('0.title')}
          subtitle={t('0.subtitle')}
          text={t('0.text')}
        />
        <Card
          title={t('1.title')}
          subtitle={
            <>
              {t('1.subtitle.0')}
              <br />
              {t('1.subtitle.1')}
            </>
          }
          highlight
        />
      </div>
    </section>
  );
};

const Card = ({
  title,
  text,
  subtitle,
  highlight = false,
}: {
  title: string;
  subtitle: ReactNode;
  text?: string;
  highlight?: boolean;
}) => (
  <article
    className={cn(
      'flex w-1/2 flex-col gap-10 max-lg:w-full',
      highlight &&
        'justify-between gap-0 rounded-lg bg-[rgba(0,0,0,0.10)] p-5',
    )}
  >
    <div className="flex items-start justify-between gap-2.5">
      <Title
        as="h3"
        size="4xl"
        color="black"
        weight={400}
        className="text-[40px] leading-[120%] max-md:text-[32px]"
        uppercase
      >
        {title}
      </Title>
      <CornerTop />
    </div>
    <div className="flex items-end gap-10">
      <CornerBottom />
      <div className="flex flex-col gap-2">
        <Title
          as="h4"
          size="3xl"
          color="black"
          weight={500}
          className={
            highlight
              ? 'text-[52px] leading-[120%] tracking-[-0.48px] max-md:text-[32px]'
              : 'text-[32px] leading-[120%] tracking-[-0.48px]'
          }
        >
          {subtitle}
        </Title>
        {text ? (
          <Text size="xl" color="black" weight={500} className="opacity-50">
            {text}
          </Text>
        ) : null}
      </div>
    </div>
  </article>
);

const CornerTop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M3.67176e-06 0.999997L26 1C27.3333 1 30 2.2 30 7C30 11.8 30 33 30 43"
      stroke="black"
    />
    <circle
      cx="30"
      cy="42.5"
      r="2"
      transform="rotate(-180 30 42.5)"
      fill="black"
    />
  </svg>
);

const CornerBottom = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M32 44H6C4.66667 44 2 42.8 2 38C2 33.2 2 12 2 2"
      stroke="black"
    />
    <circle cx="2" cy="2.5" r="2" fill="black" />
  </svg>
);
