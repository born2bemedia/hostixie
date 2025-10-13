'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'The Foundation of Trust' }),
    text: t('cards.0.text', {
      fallback:
        'We believe in honesty, openness, and doing the right thing, even when no one’s watching. Trust is the cornerstone of every partnership.',
    }),
  },
  {
    title: t('cards.1.title', {
      fallback: 'Pushing Boundaries, Setting Trends',
    }),
    text: t('cards.1.text', {
      fallback:
        'We’re not just keeping up with trends — we’re setting them. We push the limits of technology to deliver groundbreaking solutions that keep you ahead of the competition.',
    }),
  },
  {
    title: t('cards.2.title', {
      fallback: 'Building Together, Succeeding Together',
    }),
    text: t('cards.2.text', {
      fallback:
        'We’re not just service providers; we’re partners. By working closely with you, we bring your vision to life, creating solutions that truly reflect your objectives.',
    }),
  },
  {
    title: t('cards.3.title', { fallback: 'Your Success is Our Success' }),
    text: t('cards.3.text', {
      fallback:
        'Your success is our success. We’re committed to understanding your needs and ensuring every project is tailored to help you achieve your vision.',
    }),
  },
  {
    title: t('cards.4.title', {
      fallback: 'Striving for Perfection in Every Detail',
    }),
    text: t('cards.4.text', {
      fallback:
        'Mediocrity has no place here. We deliver flawless execution in every detail, creating work that’s not only functional but exceptional in every way.',
    }),
  },
];

export const CoreValues = () => {
  const t = useTranslations('companyOverview.coreValues');

  const cards = getCards(t);

  return (
    <section className="relative overflow-hidden bg-[#FFF4E1] py-[60px]">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title color="black">{t('title', { fallback: 'Core Values' })}</Title>
          <div className="flex flex-col gap-2">
            <Title as="h3" size="3xl" color="black">
              {t('subtitle', { fallback: 'The Heartbeat of Our Success' })}
            </Title>
            <Text size="xl" color="black" className="opacity-50">
              {t('text', {
                fallback:
                  'At Hostixie, our values aren’t just principles — they’re the foundation of everything we do. They guide us in delivering exceptional results, building strong relationships, and continuously evolving in the digital world. Here’s what drives us:',
              })}
            </Text>
          </div>
        </section>
        <section className="flex gap-2.5 max-lg:flex-col">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </section>
      </div>
    </section>
  );
};

const Card = ({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) => (
  <article className="flex flex-1 flex-col gap-5 rounded-xl border border-[#A4A189] max-lg:flex-col max-lg:items-start">
    <span className="flex h-[50px] items-center justify-start rounded-md bg-[#A4A189] pl-2 text-lg font-medium text-[#FFF4E1] max-lg:w-full">
      0{++index}
    </span>
    <section className="flex flex-col gap-1 p-2.5">
      <Text size="lg" color="black" weight={700} uppercase>
        {title}
      </Text>
      <Text size="base" color="black">
        {text}
      </Text>
    </section>
  </article>
);
