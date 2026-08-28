'use client';

import { type Dispatch, type SetStateAction,useEffect, useState } from 'react';
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
  '/images/web-dev/range-5.jpg',
  '/images/web-dev/range-6.jpg',
] as const;

const getSlides = (t: ReturnType<typeof useTranslations>) =>
  SLIDE_IMAGES.map((imgUrl, index) => {
    const key = String(index);
    const includes: { title: string; number: string }[] = [];

    for (let i = 0; i < 12; i++) {
      const titleKey = `${key}.includes.${i}.title`;
      if (!t.has(titleKey)) break;
      includes.push({
        title: t(titleKey),
        number: String(i + 1).padStart(3, '0'),
      });
    }

    return {
      title: t(`${key}.title`),
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
            <div key={slide.title} className="h-max min-w-full">
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
  includes,
  isShowMore,
  setIsShowMore,
}: {
  imgUrl: string;
  title: string;
  includes: {
    title: string;
    number: string;
  }[];
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
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
        <Title
          as="h4"
          weight={400}
          uppercase
          className="text-[40px] leading-[120%] tracking-[1.12px] max-md:text-[28px]"
        >
          {title}
        </Title>
        <Button
          variant="outline"
          onClick={() => setIsShowMore(prev => !prev)}
          className="shrink-0"
        >
          {isShowMore ? t('hide') : t('show')} {t('allServices')}
        </Button>
      </div>
      <section
        className={cn(
          'grid grid-cols-2 overflow-hidden transition-all duration-500 ease-in-out max-md:grid-cols-1',
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
  number,
}: {
  title: string;
  number: string;
}) => (
  <article className="flex flex-col gap-2 px-5 py-4">
    <span className="flex items-center gap-2">
      <Text size="xs" color="grey" className="tracking-[0.12px] uppercase">
        {number}
      </Text>
      <span className="h-0.5 w-8 bg-[#A4A189]" />
    </span>
    <Text size="xl" weight={500} className="tracking-[-0.48px]">
      {title}
    </Text>
  </article>
);
