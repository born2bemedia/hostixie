'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title'),
    text: t('cards.0.text'),
  },
  {
    title: t('cards.1.title'),
    text: t('cards.1.text'),
  },
  {
    title: t('cards.2.title'),
    text: t('cards.2.text'),
  },
  {
    title: t('cards.3.title'),
    text: t('cards.3.text'),
  },
];

export const OurProcess = () => {
  const t = useTranslations('clients.ourProcess');

  const cards = getCards(t);

  return (
    <section className="pt-[60px] pb-10">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title>{t('title')}</Title>
          <Text size="xl" color="grey">
            {t('text')}
          </Text>
        </section>
        <section className="flex gap-2.5 max-md:flex-col">
          {cards.map((card, i) => (
            <Card key={card.title} index={i} {...card} />
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
  <article className="flex flex-1 flex-col gap-[65px] rounded-xl border border-[#A4A189] p-6 max-md:gap-5">
    <span className="bg-primary flex h-10 w-10 items-center justify-center rounded-2xl">
      <Text weight={500} color="black">
        {++index}
      </Text>
    </span>
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
