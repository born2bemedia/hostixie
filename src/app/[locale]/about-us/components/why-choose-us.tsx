'use client';

import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import { HeadphoneCircleIcon } from '@/shared/ui/icons/headphone-circle';
import { ProcCircleIcon } from '@/shared/ui/icons/proc-circle';
import { RoutingCircleIcon } from '@/shared/ui/icons/routing-circle';
import { StopCircleIcon } from '@/shared/ui/icons/stop-circle';
import { TechCircleIcon } from '@/shared/ui/icons/tech-circle';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const CARD_ICONS = [
  StopCircleIcon,
  RoutingCircleIcon,
  HeadphoneCircleIcon,
  TechCircleIcon,
  ProcCircleIcon,
] as const;

const CARD_KEYS = ['0', '1', '2', '3', '4'] as const;

export const WhyChooseUs = () => {
  const t = useTranslations('companyOverview.whyChooseUs');

  return (
    <section className="py-[60px]">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title className="max-md:text-[40px] max-md:leading-[130%]" uppercase>
            {t('title')}
          </Title>
          <Text
            size="xl"
            color="white"
            weight={500}
            className="w-[800px] opacity-30 max-lg:w-full"
          >
            {t('text')}
          </Text>
        </section>
        <section className="flex gap-2.5 max-lg:flex-col">
          {CARD_KEYS.map((key, index) => (
            <Card
              key={key}
              icon={CARD_ICONS[index]}
              title={t(`cards.${key}.title`)}
              text={t(`cards.${key}.text`)}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

const Card = ({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: () => JSX.Element;
}) => (
  <article className="flex flex-1 flex-col gap-[65px] rounded-xl border border-[#A4A189] p-6 max-md:gap-5">
    <Icon />
    <div className="flex flex-col gap-2">
      <Text size="xl" weight={700} uppercase>
        {title}
      </Text>
      <Text size="base" color="grey">
        {text}
      </Text>
    </div>
  </article>
);
