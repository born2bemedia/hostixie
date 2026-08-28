'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

import { ArrowLeft, ArrowRight } from '@/shared/ui/components/vertical-slider';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getOutcomes = (
  t: ReturnType<typeof useTranslations>,
  cardIndex: number,
) => {
  const raw = t.raw(`cards.${cardIndex}.outcomes`);
  if (!raw || typeof raw !== 'object') return [];
  return Object.values(raw as Record<string, string>);
};

const getReviews = (t: ReturnType<typeof useTranslations>) => {
  const reviews: {
    type: string;
    title: string;
    client: string;
    project: string;
    services: string;
    outcomes: string[];
    review: string;
    author: string;
  }[] = [];

  for (let i = 0; i < 12; i++) {
    if (!t.has(`cards.${i}.title`)) break;
    reviews.push({
      type: t(`cards.${i}.type`),
      title: t(`cards.${i}.title`),
      client: t(`cards.${i}.client`),
      project: t(`cards.${i}.project`),
      services: t(`cards.${i}.services`),
      outcomes: getOutcomes(t, i),
      review: t(`cards.${i}.review`),
      author: t(`cards.${i}.author`),
    });
  }

  return reviews;
};

export const ClientReviews = () => {
  const t = useTranslations('clients.clientReviews');

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const reviews = getReviews(t);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, reviews]);

  return (
    <section className="relative bg-[#FFF4E1] py-20 pb-[160px] max-md:py-20">
      <div className="container flex flex-col gap-10 max-md:gap-2">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch gap-10">
              {reviews.map(review => (
                <div
                  key={review.title}
                  className="flex flex-[0_0_48%] rounded-[4px] bg-black/10 max-md:flex-[0_0_100%]"
                >
                  <Card {...review} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="flex items-center gap-10">
          <Divider />
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={scrollPrev}
              className="border-black hover:border-black/80"
            >
              <ArrowLeft color="black" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollNext}
              className="border-black hover:border-black/80"
            >
              <ArrowRight color="black" />
            </Button>
          </div>
        </section>
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[134px] w-full object-cover"
        src="/images/clients/bb.svg"
        alt="world"
        width={750}
        height={134}
        unoptimized
      />
    </section>
  );
};

const Card = ({
  type,
  title,
  client,
  project,
  services,
  outcomes,
  review,
  author,
}: {
  type: string;
  title: string;
  client: string;
  project: string;
  services: string;
  outcomes: string[];
  review: string;
  author: string;
}) => {
  const t = useTranslations('clients.clientReviews');

  return (
    <article className="flex h-full min-h-0 flex-col gap-5 px-10 py-5 max-md:px-5">
      <section className="flex shrink-0 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Text size="xs" color="primary" weight={700}>
            {type}
          </Text>
          <Title
            size="3xl"
            color="black"
            weight={500}
            className="text-[32px] leading-[120%] tracking-[-0.48px]"
          >
            {title}
          </Title>
        </div>
        <section className="flex flex-col gap-2.5">
          <LabelValue label={t('client')} value={client} />
          <div className="flex gap-2.5 max-md:flex-col">
            <LabelValue label={t('project')} value={project} className="flex-1" />
            <LabelValue label={t('services')} value={services} className="flex-1" />
          </div>
        </section>
      </section>
      <section className="flex min-h-0 flex-1 flex-col gap-2.5">
        <div className="flex shrink-0 flex-col gap-2 rounded-[4px] bg-black/10 p-5">
          <Text size="xs" color="black" weight={700}>
            {t('outcomes')}
          </Text>
          <ul className="flex flex-col gap-2">
            {outcomes.map(outcome => (
              <li key={outcome} className="flex items-center gap-2.5">
                <PlayIcon color="black" classNames="shrink-0" />
                <Text size="base" color="black">
                  {outcome}
                </Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex min-h-0 flex-1 flex-col justify-between gap-2.5 rounded-[4px] bg-black/10 p-5">
          <Text
            size="2xl"
            color="black"
            weight={700}
            className="text-[24px] leading-[140%] max-md:text-[24px]"
          >
            “{review}”
          </Text>
          <Text
            size="base"
            color="black"
            weight={500}
            className="shrink-0 text-right italic"
          >
            {author}
          </Text>
        </div>
      </section>
    </article>
  );
};

const LabelValue = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) => (
  <section className={className}>
    <div className="flex flex-col gap-2">
      <Text size="base" color="black" weight={500} className="opacity-30">
        {label}
      </Text>
      <Text size="xl" color="black" weight={500} className="leading-[120%]">
        {value}
      </Text>
    </div>
  </section>
);
