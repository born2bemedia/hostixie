'use client';

import { useTranslations } from 'next-intl';

import { Heading } from '@/shared/ui/components/heading';
import { LargeActionBtn } from '@/shared/ui/components/large-action-btn';
import { Text } from '@/shared/ui/kit/text';

const CARD_KEYS = ['0', '1', '2', '3', '4'] as const;

export const OurPath = () => {
  const t = useTranslations('webDevelopment.ourPath');

  return (
    <section className="container flex flex-col gap-10 py-[60px] max-md:py-10">
      <Heading title={t('title')} text={t('text')} />
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

      <div className="rounded-xl border border-[#A4A189] p-4">
        <LargeActionBtn href={'/our-approach'}>{t('link')}</LargeActionBtn>
      </div>
    </section>
  );
};

const Card = ({
  title,
  index,
  text,
}: {
  title: string;
  text: string;
  index: number;
}) => {
  return (
    <article className="flex h-auto flex-1 flex-col gap-16 rounded-[12px] border border-[#A4A189] p-6">
      <span className="bg-primary flex h-10 w-10 items-center justify-center rounded-2xl">
        <Text weight={500} color="black">
          {++index}
        </Text>
      </span>
      <section className="flex flex-col gap-2">
        <Text size="xl" weight={700}>
          {title}
        </Text>
        <Text size="base" color="grey">
          {text}
        </Text>
      </section>
    </article>
  );
};
