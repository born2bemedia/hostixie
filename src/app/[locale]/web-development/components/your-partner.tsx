'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Heading } from '@/shared/ui/components/heading';
import { Text } from '@/shared/ui/kit/text';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('cards.0.title', {
      fallback: 'Expert Craftsmanship',
    }),
    text: t('cards.0.text', {
      fallback:
        'Our team combines years of expertise with innovative design to deliver solutions that are both functional and beautiful.',
    }),
    imgUrl: '/images/web-dev/p-1.png',
  },
  {
    title: t('cards.1.title', {
      fallback: 'Innovation at Our Core',
    }),
    text: t('cards.1.text', {
      fallback:
        'We utilize cutting-edge tools and technology to ensure your website stays ahead of the curve, delivering the best possible user experience.',
    }),
    imgUrl: '/images/web-dev/p-2.png',
  },
  {
    title: t('cards.2.title', {
      fallback: 'Tailored to Perfection',
    }),
    text: t('cards.2.text', {
      fallback:
        'No templates, no cookie-cutter solutions — each project is custom-built to suit your unique vision and goals.',
    }),
    imgUrl: '/images/web-dev/p-3.png',
  },
  {
    title: t('cards.3.title', {
      fallback: 'Partnership Beyond Development',
    }),
    text: t('cards.3.text', {
      fallback:
        'We believe in long-term relationships. From the first consultation to ongoing support, we’re committed to your digital growth.',
    }),
    imgUrl: '/images/web-dev/p-4.png',
  },
];

export const YourPartner = () => {
  const t = useTranslations('webDevelopment.yourPartner');

  const cards = getCards(t);

  return (
    <section className="container flex flex-col gap-[100px] py-20 max-md:gap-10 max-md:py-10">
      <Heading
        title={t('title', {
          fallback: "Why We're Your Perfect Digital Partner",
        })}
        text={t('text', {
          fallback:
            'We don’t just build websites; we create digital experiences that elevate your brand and drive results. Here’s why we’re the right choice for your project:',
        })}
      />
      <section className="flex gap-5 max-md:flex-col">
        {cards.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
};

const Card = ({
  imgUrl,
  text,
  title,
}: {
  imgUrl: string;
  title: string;
  text: string;
}) => {
  return (
    <article className="flex flex-1 flex-col gap-4">
      <div className="flex items-center justify-center rounded-[12px] border border-[#A4A189] p-6">
        <Image src={imgUrl} alt={title} width={265} height={265} unoptimized />
      </div>
      <div className="flex flex-col gap-2">
        <Text size="xl">{title}</Text>
        <Text size="base" color="grey">
          {text}
        </Text>
      </div>
    </article>
  );
};
