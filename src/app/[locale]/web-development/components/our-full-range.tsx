'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/shared/lib/utils/cn';
import { Heading } from '@/shared/ui/components/heading';
import { ArrowLeft, ArrowRight } from '@/shared/ui/components/vertical-slider';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const SLIDE_IMAGES = [
  '/images/web-dev/range-1.jpg',
  '/images/web-dev/range-2.jpg',
  '/images/web-dev/range-3.jpg',
  '/images/web-dev/range-4.jpg',
  '/images/web-dev/range-graphic.jpg',
] as const;

const getSlides = (t: ReturnType<typeof useTranslations>) =>
  SLIDE_IMAGES.map((imgUrl, index) => {
    const key = String(index);
    const includes: {
      title: string;
      value: string;
      number: string;
    }[] = [];

    for (let i = 0; i < 12; i++) {
      const titleKey = `${key}.includes.${i}.title`;
      if (!t.has(titleKey)) break;
      includes.push({
        title: t(titleKey),
        value: t(`${key}.includes.${i}.text`),
        number: String(i + 1).padStart(3, '0'),
      });
    }

    return {
      title: t(`${key}.title`),
      text: t(`${key}.text`),
      imgUrl,
      includes,
    };
  });

export const OurFullRange = () => {
  const t = useTranslations('webDevelopment.ourFullRange');

  return (
    <section className="container flex flex-col gap-10 py-[60px] max-md:py-10">
      <Heading title={t('title')} text={t('text')} />
      <Slider />
    </section>
  );
};

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    axis: 'x',
  });

  const [isShowMore, setIsShowMore] = useState(false);

  useEffect((): (() => void) => {
    if (!emblaApi) return () => {};
    const onSelect = () => setIsShowMore(false);
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const t = useTranslations('webDevelopment.ourFullRange.slider');
  const slides = getSlides(t);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
    setIsShowMore(false);
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
    setIsShowMore(false);
  };

  return (
    <section className="flex h-max flex-col gap-10 rounded-xl border border-[#A4A189] p-6">
      <div className="flex items-center gap-10">
        <span className="h-1 w-full bg-[#FFF4E1] opacity-40" />
        <nav className="flex shrink-0 items-center gap-2">
          <Button variant="outline" onClick={scrollPrev}>
            <ArrowLeft />
          </Button>
          <Button variant="outline" onClick={scrollNext}>
            <ArrowRight />
          </Button>
        </nav>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-max">
          {slides.map(slide => (
            <div key={slide.title} className="h-max min-w-full px-1">
              <Card
                {...slide}
                isShowMore={isShowMore}
                setIsShowMore={setIsShowMore}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  imgUrl,
  title,
  text,
  includes,
  isShowMore,
  setIsShowMore,
}: {
  imgUrl: string;
  title: string;
  text: string;
  includes: {
    title: string;
    value: string;
    number: string;
  }[];
  isShowMore: boolean;
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations('webDevelopment.ourFullRange.slider');

  return (
    <article className="flex flex-col gap-10">
      <Image
        className="h-[400px] w-full object-cover"
        src={imgUrl}
        alt={title}
        width={1200}
        height={400}
        unoptimized
      />
      <div className="flex items-end justify-between gap-20 max-md:flex-col max-md:items-start max-md:gap-10">
        <section className="flex flex-col gap-2.5">
          <Title as="h4" size="4xl" weight={700} uppercase>
            {title}
          </Title>
          <Text uppercase={false}>{text}</Text>
        </section>
        <Button variant="outline" onClick={() => setIsShowMore(prev => !prev)}>
          {isShowMore
            ? t('hide', { fallback: 'Hide' })
            : t('show', { fallback: 'Show' })}{' '}
          {t('allServices', { fallback: 'all services' })}
        </Button>
      </div>
      <section
        className={cn(
          'grid grid-cols-2 gap-5 overflow-hidden transition-all duration-500 ease-in-out max-md:grid-cols-1',
          isShowMore ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        {includes.map(include => (
          <IncludeCard key={include.title} {...include} />
        ))}
      </section>
    </article>
  );
};

const IncludeCard = ({
  title,
  value,
  number,
}: {
  title: string;
  value: string;
  number: string;
}) => {
  return (
    <article className="flex flex-col gap-5 py-8 pr-2.5 pl-5">
      <span className="flex items-center gap-2">
        <Text size="xs" color="grey">
          {number}
        </Text>
        <span className="h-0.5 w-8 bg-[#A4A189]" />
      </span>
      <section className="flex flex-col">
        <Text size="xl">{title}</Text>
        <Text color="grey">{value}</Text>
      </section>
    </article>
  );
};
