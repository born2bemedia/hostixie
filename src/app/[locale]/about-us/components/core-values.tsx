'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const CARD_KEYS = ['0', '1', '2', '3', '4'] as const;

export const CoreValues = () => {
  const t = useTranslations('companyOverview.coreValues');

  return (
    <section className="relative overflow-hidden bg-[#FFF4E1] py-[60px]">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title color="black">{t('title')}</Title>
          <div className="flex flex-col gap-2">
            <Title as="h3" size="3xl" color="black">
              {t('subtitle')}
            </Title>
            <Text size="xl" color="black" className="opacity-50">
              {t('text')}
            </Text>
          </div>
        </section>
        <section className="flex gap-2.5 max-lg:flex-col">
          {CARD_KEYS.map((key, index) => (
            <Card
              key={key}
              index={index}
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
