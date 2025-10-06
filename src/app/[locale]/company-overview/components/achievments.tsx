'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { TextValue } from './text-value';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  t('cards.0', { fallback: '500+ Successful Projects Delivered' }),
  t('cards.1', { fallback: 'Over 50+ Websites Developed From Scratch' }),
  t('cards.2', { fallback: 'Collaborations with Leading Industry Partners' }),
  t('cards.3', {
    fallback: 'Recognition in Industry Reports and Publications',
  }),
  t('cards.4', {
    fallback: 'Consistently Delivering Innovative Web Solutions',
  }),
];

export const Achievments = () => {
  const t = useTranslations('companyOverview.achievments');

  const cards = getCards(t);

  return (
    <section className="flex flex-col bg-black py-20">
      <div className="container">
        <Title className="text-[112px] leading-[89.6px] tracking-[1.12px] max-md:text-[40px] max-md:leading-[130%] max-md:tracking-[1.12px]">
          {t('title', { fallback: 'Achievements & Milestones' })}
        </Title>
      </div>
      <TextValue
        title="Our Team"
        subtitle={t('subtitle', {
          fallback: 'Reflecting Our Growth and Progress',
        })}
        text={t('text', {
          fallback:
            'Throughout our journey, we’ve reached several key milestones that demonstrate our commitment to delivering exceptional web development solutions. These accomplishments underscore our ongoing commitment to creating impactful digital experiences and cultivating lasting relationships. Here are some of the milestones we’re proud of:',
        })}
        titleClassName="opacity-0 max-md:hidden"
        lineUpClassName="opacity-50"
      />
      <section className="container flex flex-col gap-5">
        <div className="flex min-h-[300px] gap-5 max-lg:flex-col">
          {cards.slice(0, 3).map(card => (
            <Card key={card} title={card} />
          ))}
        </div>
        <div className="flex min-h-[262px] gap-5 max-lg:min-h-auto max-lg:flex-col">
          {cards.slice(3).map(card => (
            <Card key={card} title={card} />
          ))}
        </div>
      </section>
    </section>
  );
};

const Card = ({ title }: { title: string }) => (
  <article className="relative flex h-auto flex-1 items-center justify-center gap-5 rounded-xl border border-[#A4A189] p-6 max-lg:min-h-[154px]">
    <span className="bg-primary h-4 w-4 shrink-0 rounded-full" />
    <Text
      size="3xl"
      color="white"
      weight={500}
      className="leading-[120%] tracking-[-0.48px]"
    >
      {title}
    </Text>
    <GreyDot className="absolute top-6 right-6" />
    <GreyDot className="absolute right-6 bottom-6" />
    <GreyDot className="absolute bottom-6 left-6" />
    <GreyDot className="absolute top-6 left-6" />
  </article>
);

const GreyDot = ({ className }: { className?: string }) => (
  <span className={cn('h-1 w-1 bg-[#A4A189]', className)} />
);
