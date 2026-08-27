'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getReviews = (t: ReturnType<typeof useTranslations>) =>
  [0, 1, 2, 3].map(index => ({
    text: t(`reviews.${index}.text`),
    from: t(`reviews.${index}.from`),
  }));

export const Experience = () => {
  const t = useTranslations('clients.experience');
  const reviews = getReviews(t);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative pb-[260px]">
      <div className="relative container flex flex-col gap-[48px]">
        <Divider />
        <section className="flex flex-col gap-10">
          <Title className="text-[45px] leading-[52.8px] tracking-[-0.48px] max-md:text-[24px] max-md:leading-[120%] max-md:tracking-[-0.48px]">
            {t('title')}
          </Title>
          <div className="flex items-center gap-10">
            <span className="h-1 grow bg-white"></span>
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={scrollPrev}
                className="flex h-10 w-15.5 cursor-pointer items-center justify-center rounded-lg border border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M8.48528 15.2735L2.29103 9.07929L2.29103 7.89135L8.48528 1.69709"
                    stroke="#fff"
                    strokeWidth="2.4"
                  />
                  <path
                    d="M1.69706 8.48532H15.2735"
                    stroke="#fff"
                    strokeWidth="2.4"
                  />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="flex h-10 w-15.5 cursor-pointer items-center justify-center rounded-lg border border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M8.48528 1.69702L14.6795 7.89128L14.6795 9.07922L8.48528 15.2735"
                    stroke="#fff"
                    strokeWidth="2.4"
                  />
                  <path
                    d="M15.2735 8.48525H1.69706"
                    stroke="#fff"
                    strokeWidth="2.4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch gap-5">
              {reviews.map(review => (
                <div
                  key={review.from}
                  className="flex flex-[0_0_25%] px-2 max-md:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                >
                  <Card {...review} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[204px] w-full object-cover"
        src="/images/clients/bbw.svg"
        alt="bb"
        width={1440}
        height={204}
        unoptimized
      />
    </section>
  );
};

const Card = ({ text, from }: { text: string; from: string }) => (
  <article className="flex h-full w-full cursor-grab flex-col justify-between gap-2 rounded bg-[rgba(255,244,225,0.10)] p-10">
    <Text size="2xl" weight={500}>
      {text}
    </Text>
    <Text size="base" color="grey" uppercase>
      {from}
    </Text>
  </article>
);
