'use client';

import { useTranslations } from 'next-intl';

import { Heading } from '@/shared/ui/components/heading';
import { Text } from '@/shared/ui/kit/text';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', {
      fallback: 'Discovery & Vision Mapping',
    }),
    text: t('cards.0.text', {
      fallback:
        'We kick off by understanding your business, goals, and challenges. Your vision drives the project’s direction — no surprises, just straightforward, actionable steps.',
    }),
  },
  {
    title: t('cards.1.title', {
      fallback: 'Strategic Blueprint Creation',
    }),
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
    title: t('cards.3.title', {
      fallback: 'Launch With Confidence',
    }),
    text: t('cards.3.text', {
      fallback:
        'We thoroughly test everything to ensure your website functions flawlessly across all devices and platforms, then launch with precision.',
    }),
  },
  {
    title: t('cards.4.title', {
      fallback: 'Continuous Evolution',
    }),
    text: t('cards.4.text', {
      fallback:
        'Our commitment doesn’t end at launch. With ongoing support, maintenance, and performance monitoring, we ensure your website stays at the top of its game.',
    }),
  },
];

export const OurPath = () => {
  const t = useTranslations('webDevelopment.ourPath');

  return (
    <section className="container flex flex-col gap-10 py-[60px] max-md:py-10">
      <Heading
        title={t('title', {
          fallback: 'Our Proven Path to Digital Success',
        })}
        text={t('text', {
          fallback:
            'We believe in transparency, collaboration, and excellence. Our approach is carefully crafted to ensure that every website we develop meets your needs, exceeds your expectations, and drives measurable success.',
        })}
      />
      <section className="flex gap-2.5 max-lg:flex-wrap max-md:flex-col">
        {getCards(t).map((card, i) => (
          <Card key={card.title} index={i} {...card} />
        ))}
      </section>
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
    <article className="flex h-max flex-1 flex-col gap-16 rounded-[12px] border border-[#A4A189] p-6">
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
