'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { GreyDot } from '@/shared/ui/components/grey-dot';
import { VerticalSlider } from '@/shared/ui/components/vertical-slider';
import { AwardWorldIcon } from '@/shared/ui/icons/award-world';
import { CaseWorldIcon } from '@/shared/ui/icons/case-world';
import { PulseWorldIcon } from '@/shared/ui/icons/pulse-world';
import { SaleWorldIcon } from '@/shared/ui/icons/sale-world';
import { StatWorldIcon } from '@/shared/ui/icons/stat-world';
import { WalletWorldIcon } from '@/shared/ui/icons/wallet-world';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSlides = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: CaseWorldIcon,
    title: t('cards.0.title', {
      fallback: 'Professional Growth & Career Development',
    }),
    text: t('cards.0.text', {
      fallback:
        'We support continuous learning through training programs, mentorship, and opportunities to grow your role as you advance.',
    }),
  },
  {
    icon: PulseWorldIcon,
    title: t('cards.1.title', {
      fallback: 'Mental Wellbeing Support',
    }),
    text: t('cards.1.text', {
      fallback:
        'Access resources and tools that promote a healthy work-life balance, including mental health support and wellness initiatives.',
    }),
  },
  {
    icon: AwardWorldIcon,
    title: t('cards.2.title', {
      fallback: 'Flexible & Modern Benefits',
    }),
    text: t('cards.2.text', {
      fallback:
        'Our benefits are designed to adapt to your lifestyle, with remote-friendly policies, flexible scheduling, and comprehensive health options.',
    }),
  },
  {
    icon: SaleWorldIcon,
    title: t('cards.3.title', {
      fallback: 'Exclusive Perks & Lifestyle Discounts',
    }),
    text: t('cards.3.text', {
      fallback:
        'Enjoy team perks, software tool access, and partner discounts to make work (and life) more enjoyable, balanced, fulfilling, and rewarding.',
    }),
  },
  {
    icon: WalletWorldIcon,
    title: t('cards.4.title', {
      fallback: 'Smart Savings & Retirement Plans',
    }),
    text: t('cards.4.text', {
      fallback:
        'We help you plan ahead with employee savings programs and long-term retirement support options tailored to your goals.',
    }),
  },
  {
    icon: StatWorldIcon,
    title: t('cards.5.title', {
      fallback: 'Performance-Based Recognition & Bonuses',
    }),
    text: t('cards.5.text', {
      fallback:
        'We reward impact. Team members who drive results and go above and beyond are recognized through performance bonuses.',
    }),
  },
];

export const WhyJoinUs = () => {
  const t = useTranslations('careers.whyJoinUs');

  const slides = getSlides(t);

  return (
    <section className="relative bg-[#FFF4E1] pt-10 pb-[180px] max-md:py-10">
      <div className="container flex flex-col gap-12">
        <span className="h-1 w-full bg-[#A4A189] opacity-40" />
        <section className="flex flex-col gap-5">
          <Title
            color="black"
            weight={500}
            className="text-[45px] max-md:text-lg"
          >
            {t('title', { fallback: 'Why Join Us' })}
          </Title>
          <VerticalSlider>
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className="min-w-full flex-shrink-0 md:min-w-[50%] lg:min-w-[33%]"
              >
                <Card index={i} {...slide} />
              </div>
            ))}
          </VerticalSlider>
        </section>
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[134px] w-full object-cover"
        src="/images/careers/bb.svg"
        alt="world"
        width={750}
        height={134}
        unoptimized
      />
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
  index,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
  index: number;
}) => (
  <article className="flex max-w-[640px] cursor-grab flex-col gap-4.5 pr-8 max-md:max-w-[340px] max-md:pr-0">
    <section className="relative flex flex-col items-center justify-center rounded-xl border border-[#A4A189]">
      <Text size="xs" color="black" className="absolute top-6 left-6">
        00{++index}
      </Text>
      <Icon />
      <GreyDot className="absolute top-6 right-6" />
      <GreyDot className="absolute right-6 bottom-6" />
      <GreyDot className="absolute bottom-6 left-6" />
      <div />
    </section>
    <section className="flex items-center justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-2">
      <Text
        size="lg"
        color="black"
        weight={700}
        className="w-full max-w-[250px]"
      >
        {title}
      </Text>
      <Text size="base" color="grey">
        {text}
      </Text>
    </section>
  </article>
);
