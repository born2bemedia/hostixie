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

const OUTCOME_COUNTS = [5, 3, 3, 3] as const;

const getReviews = (t: ReturnType<typeof useTranslations>) =>
  OUTCOME_COUNTS.map((outcomeCount, index) => ({
    type: t(`cards.${index}.type`),
    title: t(`cards.${index}.title`),
    client: t(`cards.${index}.client`),
    project: t(`cards.${index}.project`),
    services: t(`cards.${index}.services`),
    outcomes: Array.from({ length: outcomeCount }, (_, i) =>
      t(`cards.${index}.outcomes.${i}`),
    ),
    review: t(`cards.${index}.review`),
    author: t(`cards.${index}.author`),
  }));

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
            <div className="flex gap-10">
              {reviews.map(review => (
                <div
                  key={review.title}
                  className="flex-[0_0_48%] rounded-[4px] bg-black/10 px-5 max-md:flex-[0_0_100%] max-md:px-0"
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
    <article className="flex h-full flex-col justify-between gap-5 px-10 py-5 max-md:px-5">
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Text size="xs" color="primary" weight={700}>
            {type}
          </Text>
          <Title size="3xl" color="black" weight={500}>
            {title}
          </Title>
        </div>
        <section className="flex flex-col gap-2.5">
          <LabelValue label={t('client')} value={client} />
          <div className="flex justify-between gap-4">
            <LabelValue label={t('project')} value={project} />
            <LabelValue label={t('services')} value={services} />
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-2 rounded-[4px] bg-black/10 p-5">
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
        <div className="flex flex-col gap-2 rounded-[4px] bg-black/10 p-5">
          <Text
            size="2xl"
            color="black"
            weight={700}
            className="max-md:text-[24px]"
          >
            {review}
          </Text>
          <Text size="base" color="black" weight={500} className="opacity-50">
            {author}
          </Text>
        </div>
      </section>
    </article>
  );
};

const LabelValue = ({ label, value }: { label: string; value: string }) => (
  <section className="flex flex-col gap-2">
    <Text size="base" color="black" weight={500} className="opacity-30">
      {label}
    </Text>
    <Text size="base" color="black" weight={500}>
      {value}
    </Text>
  </section>
);
