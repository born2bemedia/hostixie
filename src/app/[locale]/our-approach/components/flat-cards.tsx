'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const CARD_IMAGES = [
  '/images/our-philosophy/card-1.jpg',
  '/images/our-philosophy/card-2.jpg',
  '/images/our-philosophy/card-3.jpg',
  '/images/our-philosophy/card-4.jpg',
  '/images/our-philosophy/card-5.jpg',
  '/images/our-philosophy/card-6.jpg',
  '/images/our-philosophy/card-7.jpg',
] as const;

export const FlatCards = () => {
  const t = useTranslations('ourApproach.flatCards');

  return (
    <section className="bg-[#FFF4E1] py-[60px] max-md:py-10">
      <div className="relative container flex flex-col gap-10">
        {CARD_IMAGES.map((imgUrl, index) => {
          const key = String(index);
          return (
            <Card
              key={key}
              index={index}
              imgUrl={imgUrl}
              title={t(`${key}.title`)}
              subtitle={t(`${key}.subtitle`)}
              text={t(`${key}.text`)}
            />
          );
        })}
      </div>
    </section>
  );
};

const Card = ({
  imgUrl,
  subtitle,
  text,
  title,
  index,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
  text: string;
  index: number;
}) => {
  return (
    <article
      className="sticky flex flex-col gap-2.5 rounded-xl border border-[#A4A189] bg-[#FFF4E1] p-4 max-md:!relative max-md:!top-0"
      style={{
        top: `${index * 40}px`,
        zIndex: index,
      }}
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-sm">
        <Image
          className="object-cover"
          src={imgUrl}
          alt={title}
          fill
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[60%] to-black" />
        <Title
          as="h4"
          size="4xl"
          weight={700}
          className="absolute bottom-5 left-5 z-10 max-md:text-2xl"
          uppercase
        >
          {title}
        </Title>
      </div>
      <div className="flex flex-col gap-2">
        <Text size="xl" color="primary" weight={700}>
          {subtitle}
        </Text>
        <Text size="base" color="black" weight={500}>
          {text}
        </Text>
      </div>
    </article>
  );
};
