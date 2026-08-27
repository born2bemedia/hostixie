'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { HeroTitle } from '@/shared/ui/components/hero-title';
import { LargeActionBtn } from '@/shared/ui/components/large-action-btn';
import { BlendIcon } from '@/shared/ui/icons/blend';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('steps.0.title', { fallback: 'Advertising Campaigns' }),
    text: t('steps.0.text', {
      fallback:
        'We develop advertising concepts and campaigns aligned with your objectives, audience, positioning, and communication goals.',
    }),
  },
  {
    title: t('steps.1.title', { fallback: 'Media Planning & Placement' }),
    text: t('steps.1.text', {
      fallback:
        'We identify suitable media channels, plan advertising placements, and coordinate campaign delivery to help your message reach relevant audiences.',
    }),
  },
  {
    title: t('steps.2.title', { fallback: 'Creative Advertising' }),
    text: t('steps.2.text', {
      fallback:
        'From campaign concepts to visual materials and advertising assets, we transform ideas into consistent creative communication.',
    }),
  },
  {
    title: t('steps.3.title', { fallback: 'Campaign Strategy' }),
    text: t('steps.3.text', {
      fallback:
        'We define campaign objectives, audiences, messaging, channels, and execution plans to provide every advertising initiative with a clear direction.',
    }),
  },
  {
    title: t('steps.4.title', { fallback: 'Advertising Performance Analysis' }),
    text: t('steps.4.text', {
      fallback:
        'We review campaign results and audience response to identify opportunities for stronger future communication.',
    }),
  },
];

const getDevSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('devSteps.0.title', {
      fallback: 'Marketing & Business Consulting',
    }),
    text: t('devSteps.0.text', {
      fallback:
        'We help businesses evaluate opportunities, clarify priorities, and develop marketing approaches aligned with their broader commercial goals.',
    }),
  },
  {
    title: t('devSteps.1.title', { fallback: 'Market Research' }),
    text: t('devSteps.1.text', {
      fallback:
        'We collect and analyze relevant market, audience, competitor, and consumer information to support better-informed decisions.',
    }),
  },
  {
    title: t('devSteps.2.title', { fallback: 'PR & Communications' }),
    text: t('devSteps.2.text', {
      fallback:
        'We develop communication strategies that help businesses communicate consistently with customers, partners, and media.',
    }),
  },
  {
    title: t('devSteps.3.title', {
      fallback: 'Brand & Visual Communications',
    }),
    text: t('devSteps.3.text', {
      fallback:
        'We create visual materials that strengthen brand recognition and deliver clear, consistent communication across different channels.',
    }),
  },
  {
    title: t('devSteps.4.title', { fallback: 'Graphic Design' }),
    text: t('devSteps.4.text', {
      fallback:
        'From advertising creatives and presentations to visual communication assets, we design content that brings ideas to life.',
    }),
  },
];

export const WhatWeDo = () => {
  const [displayType, setDisplayType] = useState<'hosting' | 'development'>(
    'hosting',
  );

  const t = useTranslations('home.whatWeDo');

  const steps = getSteps(t);
  const devSteps = getDevSteps(t);

  return (
    <section className="container flex flex-col gap-10 pt-[76px]">
      <HeroTitle
        title={t('title', { fallback: 'What We Do' })}
        subtitle={t('subtitle', {
          fallback:
            'Strategic Advertising and Communications for Brands Ready to Be Seen',
        })}
        text={t('text', {
          fallback:
            'At Hostixie, we combine advertising, marketing strategy, communications, research, and creative design to help businesses strengthen their market presence.',
        })}
      />
      <section className="rounded-xl border border-[#A4A189]">
        <section className="flex gap-2 max-md:flex-col">
          <div className="flex w-1/2 flex-col gap-5 border-r border-[#A4A189] py-5 pr-2 pl-5 max-md:w-full max-md:border-r-0 max-md:border-b">
            <Image
              className="h-[429px] w-full object-cover"
              src="/images/home/web-hosting.jpg"
              alt="advertising-services"
              width={632}
              height={429}
              unoptimized
            />
            <section className="flex flex-col gap-2.5">
              <button
                className="flex w-full cursor-pointer items-center justify-start gap-5 text-left transition-opacity duration-300 ease-in-out hover:opacity-80"
                onClick={() => setDisplayType('hosting')}
              >
                {displayType === 'hosting' && <BlendIcon />}
                <Title
                  as="h4"
                  size="6xl"
                  className={cn(
                    'text-left',
                    displayType === 'development'
                      ? 'opacity-20'
                      : 'opacity-100',
                  )}
                >
                  {t('webHosting', { fallback: 'Advertising Services' })}
                </Title>
              </button>
              <button
                className="flex w-full cursor-pointer items-center justify-start gap-5 text-left transition-opacity duration-300 ease-in-out hover:opacity-80"
                onClick={() => setDisplayType('development')}
              >
                {displayType === 'development' && <BlendIcon />}
                <Title
                  as="h4"
                  size="6xl"
                  className={cn(
                    'text-left',
                    displayType === 'development'
                      ? 'opacity-100'
                      : 'opacity-20',
                  )}
                >
                  {t('webDevelopment', {
                    fallback: 'Marketing & Communications',
                  })}
                </Title>
              </button>
            </section>
          </div>
          <section className="flex w-1/2 flex-col max-md:w-full">
            {displayType === 'hosting'
              ? steps.map((step, i) => (
                  <Card
                    key={step.title}
                    title={step.title}
                    text={step.text}
                    i={i}
                  />
                ))
              : devSteps.map((step, i) => (
                  <Card
                    key={step.title}
                    title={step.title}
                    text={step.text}
                    i={i}
                  />
                ))}
          </section>
        </section>
        <div className="rounded-xl border-t border-[#A4A189] p-4">
          <LargeActionBtn
            href={
              displayType === 'hosting'
                ? '/advertising-services'
                : '/marketing-communications'
            }
          >
            {displayType === 'hosting'
              ? t('uncoverMoreOptions', {
                  fallback: 'Explore Advertising Services',
                })
              : t('browseMoreOfferings', {
                  fallback: 'Explore Marketing & Communications',
                })}
          </LargeActionBtn>
        </div>
      </section>
    </section>
  );
};

const Card = ({
  title,
  text,
  i,
}: {
  title: string;
  text: string;
  i: number;
}) => (
  <article className="ml-auto flex w-full max-w-[528px] items-center justify-between gap-3.5 max-md:m-0 max-md:max-w-full max-md:gap-6 max-md:px-5">
    <div className="flex flex-col gap-2 py-20 max-md:py-10">
      <Title as="h5" size="5xl">
        {title}
      </Title>
      <Text size="base" color="grey">
        {text}
      </Text>
    </div>
    <span className="flex items-center gap-2">
      <Text size="xs" color="grey">
        00{++i}
      </Text>
      <span className="h-0.5 w-8 bg-[#A4A189]" />
    </span>
  </article>
);
