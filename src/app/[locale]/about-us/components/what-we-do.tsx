'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { PenToolIcon } from '@/shared/ui/icons/pen-tool';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const CARD_ICONS = [
  '/images/company-overview/icons/share.svg',
  '/images/company-overview/icons/briefcase.svg',
  '/images/company-overview/icons/category.svg',
  '/images/company-overview/icons/people.svg',
  '/images/company-overview/icons/messages.svg',
  '/images/company-overview/icons/routing.svg',
  '/images/company-overview/icons/global-search.svg',
  '/images/company-overview/icons/blend.svg',
  '/images/company-overview/icons/global.svg',
  'pen-tool',
  '/images/company-overview/icons/hierarchy.svg',
  '/images/company-overview/icons/data.svg',
] as const;

export const WhatWeDo = () => {
  const t = useTranslations('companyOverview.whatWeDo');

  return (
    <section className="relative overflow-hidden bg-[#FFF4E1] pb-[194px] pt-[60px] max-md:pb-[160px]">
      <div className="container relative z-[1] flex gap-10 max-lg:flex-col">
        <section className="flex w-[43%] flex-col gap-5 max-lg:w-full">
          <Title
            color="black"
            className="text-[80px] leading-[89.6px] tracking-[1.12px] max-md:text-[40px] max-md:leading-[120%]"
            uppercase
          >
            {t('title')}
          </Title>
          <div className="flex flex-col gap-2">
            <Title
              as="h3"
              size="3xl"
              color="black"
              weight={500}
              className="text-[32px] leading-[120%] tracking-[-0.48px] max-md:text-[24px]"
            >
              {t('subtitle')}
            </Title>
            <Text size="xl" color="black" className="opacity-50">
              {t('text')}
            </Text>
            <Text size="xl" color="black" className="opacity-50">
              {t('text2')}
            </Text>
          </div>
        </section>
        <section className="grid w-[57%] grid-flow-col grid-cols-2 grid-rows-6 gap-2 max-lg:w-full max-md:grid-flow-row max-md:grid-rows-none">
          {CARD_ICONS.map((icon, index) => (
            <Card key={index} icon={icon} text={t(`cards.${index}`)} />
          ))}
        </section>
      </div>
      <Image
        className="absolute -bottom-50 left-40 z-0 opacity-50 max-[1330px]:hidden"
        src="/images/company-overview/world.svg"
        alt=""
        width={711}
        height={711}
        unoptimized
      />
      <Image
        className="absolute bottom-0 left-0 z-10 h-[134px] w-full object-cover"
        src="/images/company-overview/bb.svg"
        alt=""
        width={1440}
        height={134}
        unoptimized
      />
    </section>
  );
};

const Card = ({ icon, text }: { icon: string; text: string }) => (
  <article className="flex flex-col gap-4 rounded-[5.217px] bg-[#A4A189] p-4">
    {icon === 'pen-tool' ? (
      <span className="flex size-6 items-center justify-center [&_svg]:size-6">
        <PenToolIcon />
      </span>
    ) : (
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
        className="size-6"
        unoptimized
      />
    )}
    <Text
      size="xl"
      color="solidWhite"
      weight={700}
      uppercase
      className="leading-[1.3] tracking-[0.2px]"
    >
      {text}
    </Text>
  </article>
);
