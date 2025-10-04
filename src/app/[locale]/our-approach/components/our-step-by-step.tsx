'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', { fallback: 'Discovery & Vision Mapping' }),
    text: t('cards.0.text', {
      fallback:
        'We kick off by understanding your business, goals, and challenges. Your vision drives the project’s direction — no surprises, just straightforward, actionable steps.',
    }),
  },
  {
    title: t('cards.1.title', { fallback: 'Strategic Blueprint Creation' }),
    text: t('cards.1.text', {
      fallback:
        'After understanding your needs, we design a customized roadmap for success, outlining design, functionality, and timelines.',
    }),
  },
  {
    title: t('cards.2.title', {
      fallback: 'Designing Your Digital Masterpiece',
    }),
    text: t('cards.2.text', {
      fallback:
        'Our designers and developers collaborate to build a website that’s visually stunning, intuitive, and optimized for a seamless user experience.',
    }),
  },
  {
    title: t('cards.3.title', { fallback: 'Launch With Confidence' }),
    text: t('cards.3.text', {
      fallback:
        'We thoroughly test everything to ensure your website functions flawlessly across all devices and platforms, then launch with precision.',
    }),
  },
  {
    title: t('cards.4.title', { fallback: 'Continuous Evolution' }),
    text: t('cards.4.text', {
      fallback:
        'Our commitment doesn’t end at launch. With ongoing support, maintenance, and performance monitoring, we ensure your website stays at the top of its game.',
    }),
  },
];

export const OurStepByStep = () => {
  const t = useTranslations('ourApproach.ourStepByStep');

  const cards = getCards(t);

  return (
    <section className="bg-[#FFF4E1] py-[60px] max-md:py-10">
      <div className="container flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <Title
            color="black"
            className="max-md:text-[40px] max-md:leading-[130%] max-md:tracking-[1.12px]"
            uppercase
          >
            {t('title', { fallback: 'Our Step-by-Step Process' })}
          </Title>
          <div className="flex w-[900px] flex-col gap-2 max-lg:w-full">
            <Text size="3xl" color="black" weight={500}>
              {t('subtitle', { fallback: 'A Transparent Journey to Success' })}
            </Text>
            <Text size="xl" color="black" className="opacity-50">
              {t('text', {
                fallback:
                  'Our process is designed to ensure a smooth, transparent, and collaborative experience for you. Here’s how we guide you through every stage:',
              })}
            </Text>
          </div>
        </section>
        <section className="flex gap-2.5 max-lg:flex-wrap max-md:flex-col">
          {cards.map((card, i) => (
            <Card key={card.title} index={i} {...card} />
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
