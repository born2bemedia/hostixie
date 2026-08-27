'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { TextValue } from './text-value';

const CARD_KEYS = ['0', '1', '2', '3', '4'] as const;

export const Achievments = () => {
  const t = useTranslations('companyOverview.achievments');

  return (
    <section className="flex flex-col bg-black py-20">
      <div className="container">
        <Title className="upp text-[112px] leading-[89.6px] tracking-[1.12px] text-[#FFF4E1] uppercase max-lg:text-[96px] max-md:text-[40px] max-md:leading-[130%] max-md:tracking-[1.12px]">
          {t('title')}
        </Title>
      </div>
      <TextValue
        title="Our Team"
        subtitle={t('subtitle')}
        text={t('text')}
        titleClassName="opacity-0 max-md:hidden"
        lineUpClassName="opacity-50"
      />
      <section className="container flex flex-col gap-5">
        <div className="flex min-h-[300px] gap-5 max-lg:flex-col">
          {CARD_KEYS.slice(0, 3).map(key => (
            <Card key={key} title={t(`cards.${key}`)} />
          ))}
        </div>
        <div className="flex min-h-[262px] gap-5 max-lg:min-h-auto max-lg:flex-col">
          {CARD_KEYS.slice(3).map(key => (
            <Card key={key} title={t(`cards.${key}`)} />
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
