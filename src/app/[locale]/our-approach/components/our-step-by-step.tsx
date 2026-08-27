'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const CARD_KEYS = ['0', '1', '2', '3', '4'] as const;

export const OurStepByStep = () => {
  const t = useTranslations('ourApproach.ourStepByStep');

  return (
    <section className="bg-[#FFF4E1] py-[60px] max-md:py-10">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title
            color="black"
            className="max-md:text-[40px] max-md:leading-[130%] max-md:tracking-[1.12px]"
            uppercase
          >
            {t('title')}
          </Title>
          <div className="flex w-[900px] flex-col gap-2 max-lg:w-full">
            <Text size="3xl" color="black" weight={500}>
              {t('subtitle')}
            </Text>
            <Text size="xl" color="black" className="opacity-50">
              {t('text')}
            </Text>
          </div>
        </section>
        <section className="flex gap-2.5 max-lg:flex-wrap max-md:flex-col">
          {CARD_KEYS.map((key, i) => (
            <Card
              key={key}
              index={i}
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
  index,
  text,
  title,
}: {
  title: string;
  text: string;
  index: number;
}) => {
  return (
    <article className="flex flex-1 flex-col gap-[65px] rounded-xl border border-[#A4A189] p-6">
      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-2xl">
        <Text weight={500} color="black">
          {++index}
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <Title as="h3" size="xl" color="black" weight={700} uppercase>
          {title}
        </Title>
        <Text size="base" color="black">
          {text}
        </Text>
      </div>
    </article>
  );
};
