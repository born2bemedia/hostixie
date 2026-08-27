'use client';

import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { GreyDot } from '@/shared/ui/components/grey-dot';
import { HeroTitle } from '@/shared/ui/components/hero-title';
import { VerticalSlider } from '@/shared/ui/components/vertical-slider';
import { ConnectedWorldIcon } from '@/shared/ui/icons/connected-world';
import { DevWorldIcon } from '@/shared/ui/icons/dev-world';
import { LaunchWorldIcon } from '@/shared/ui/icons/launch-world';
import { WorldIcon } from '@/shared/ui/icons/world';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSlides = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: WorldIcon,
    title: t('slides.0.title'),
    text: t('slides.0.text'),
  },
  {
    icon: ConnectedWorldIcon,
    title: t('slides.1.title'),
    text: t('slides.1.text'),
  },
  {
    icon: DevWorldIcon,
    title: t('slides.2.title'),
    text: t('slides.2.text'),
  },
  {
    icon: LaunchWorldIcon,
    title: t('slides.3.title'),
    text: t('slides.3.text'),
  },
];

export const OurApproach = () => {
  const t = useTranslations('home.ourApproach');
  const { openRequestForm } = useRequestForm();

  const slides = getSlides(t);

  return (
    <section className="container flex flex-col gap-[100px] pt-[110px]">
      <HeroTitle
        title={t('title')}
        subtitle={t('subtitle')}
        text={t('text')}
      />
      <section className="flex flex-col gap-12">
        <Divider />
        <div className="flex flex-col gap-5">
          <Title as="h3" size="5xl">
            {t('stepByStep')}
          </Title>
          <VerticalSlider navigation>
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className="min-w-full flex-shrink-0 md:min-w-[50%] lg:min-w-[33%]"
              >
                <Card index={i} {...slide} />
              </div>
            ))}
          </VerticalSlider>
          <button
            type="button"
            onClick={openRequestForm}
            className="flex h-[100px] w-full cursor-pointer items-center justify-center rounded bg-[#FFF4E1]/10 transition-all duration-300 ease-in-out hover:bg-[#FFF4E1]/20"
          >
            <Text size="lg" weight={700}>
              {t('button')}
            </Text>
          </button>
        </div>
      </section>
    </section>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
  index,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
  index: number;
}) => (
  <article className="flex max-w-[640px] cursor-grab flex-col gap-4.5 pr-8 max-md:max-w-[340px] max-md:pr-0">
    <section className="relative flex flex-col items-center justify-center rounded-xl border border-[#A4A189]">
      <Text size="xs" className="absolute top-6 left-6">
        {String(++index).padStart(3, '0')}
      </Text>
      <Icon />
      <GreyDot className="absolute top-6 right-6" />
      <GreyDot className="absolute right-6 bottom-6" />
      <GreyDot className="absolute bottom-6 left-6" />
      <div />
    </section>
    <section className="flex items-center justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-2">
      <Text size="lg" weight={700} className="w-full max-w-[138px]">
        {title}
      </Text>
      <Text size="base" color="grey">
        {text}
      </Text>
    </section>
  </article>
);
