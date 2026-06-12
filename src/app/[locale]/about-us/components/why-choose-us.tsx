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

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: StopCircleIcon,
    title: t('cards.0.title', { fallback: 'Proven Track Record' }),
    text: t('cards.0.text', {
      fallback:
        'A dynamic, young agency with 10+ years of combined experience delivering high-quality web solutions that drive results.',
    }),
  },
  {
    icon: RoutingCircleIcon,
    title: t('cards.1.title', { fallback: 'Custom Solutions' }),
    text: t('cards.1.text', {
      fallback:
        'Tailored services designed to meet the unique needs of each client.',
    }),
  },
  {
    icon: HeadphoneCircleIcon,
    title: t('cards.2.title', { fallback: 'Dedicated Support' }),
    text: t('cards.2.text', {
      fallback:
        'Ongoing maintenance and support to ensure your website remains optimal.',
    }),
  },
  {
    icon: TechCircleIcon,
    title: t('cards.3.title', { fallback: 'Cutting-Edge Technology' }),
    text: t('cards.3.text', {
      fallback:
        'We leverage the latest tools and technologies to stay ahead of the curve.',
    }),
  },
  {
    icon: ProcCircleIcon,
    title: t('cards.4.title', { fallback: 'Collaborative Process' }),
    text: t('cards.4.text', {
      fallback:
        'We work closely with clients to ensure their vision is brought to life.',
    }),
  },
];

export const WhyChooseUs = () => {
  const t = useTranslations('companyOverview.whyChooseUs');

  const cards = getCards(t);

  return (
    <section className="py-[60px]">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title className="max-md:text-[40px] max-md:leading-[130%]" uppercase>
            {t('title', { fallback: 'Why Choose Us?' })}
          </Title>
          <Text
            size="xl"
            color="white"
            weight={500}
            className="w-[800px] opacity-30 max-lg:w-full"
          >
            {t('text', {
              fallback:
                'Hostixie believes in delivering more than just websites — we create digital experiences that drive business success. Here’s why businesses choose us:',
            })}
          </Text>
        </section>
        <section className="flex gap-2.5 max-lg:flex-col">
          {cards.map(card => (
            <Card key={card.title} {...card} />
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
