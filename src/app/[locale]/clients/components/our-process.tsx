'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Kickoff Call' }),
    text: t('cards.0.text', { fallback: 'We align on vision and goals' }),
  },
  {
    title: t('cards.1.title', { fallback: 'Proposal & Timeline' }),
    text: t('cards.1.text', { fallback: 'You get a clear roadmap' }),
  },
  {
    title: t('cards.2.title', { fallback: 'Development & Hosting Setup' }),
    text: t('cards.2.text', { fallback: 'Fully managed by our team' }),
  },
  {
    title: t('cards.3.title', { fallback: 'Launch & Support' }),
    text: t('cards.3.text', {
      fallback: 'Your project goes live with ongoing care',
    }),
  },
];

export const OurProcess = () => {
  const t = useTranslations('clients.ourProcess');

  const cards = getCards(t);

  return (
    <section className="pt-[60px] pb-10">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title>{t('title', { fallback: 'Our Collaboration Process' })}</Title>
          <Text size="xl" className="opacity-30">
            {t('text', {
              fallback:
                'Our collaborations typically follow a structured but flexible format:',
            })}
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
