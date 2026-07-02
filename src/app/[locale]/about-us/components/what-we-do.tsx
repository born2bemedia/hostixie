'use client';

import type { JSX, ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { BagIcon } from '@/shared/ui/icons/bag';
import { CodeIcon } from '@/shared/ui/icons/code';
import { DocumentIcon } from '@/shared/ui/icons/document';
import { DriverIcon } from '@/shared/ui/icons/driver';
import { GlobalSearchIcon } from '@/shared/ui/icons/global-search';
import { KeyboardIcon } from '@/shared/ui/icons/keyboard';
import { MobileIcon } from '@/shared/ui/icons/mobile';
import { PenToolIcon } from '@/shared/ui/icons/pen-tool';
import { SupportIcon } from '@/shared/ui/icons/support';
import { WebAppIcon } from '@/shared/ui/icons/web-app';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getCards = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: BagIcon,
    text: (
      <>
        {t('cards.0.0', { fallback: 'E-commerce' })} <br />{' '}
        {t('cards.0.1', { fallback: 'Solutions' })}
      </>
    ),
  },
  {
    icon: CodeIcon,
    text: (
      <>
        {t('cards.1.0', { fallback: 'Custom Website' })} <br />{' '}
        {t('cards.1.1', { fallback: 'Development' })}
      </>
    ),
  },
  {
    icon: GlobalSearchIcon,
    text: (
      <>
        {t('cards.2.0', { fallback: 'SEO & Digital' })} <br />{' '}
        {t('cards.2.1', { fallback: 'Marketing' })}
      </>
    ),
  },
  {
    icon: WebAppIcon,
    text: (
      <>
        {t('cards.3.0', { fallback: 'Web Application' })} <br />{' '}
        {t('cards.3.1', { fallback: 'Development' })}
      </>
    ),
  },
  {
    icon: SupportIcon,
    text: (
      <>
        {t('cards.4.0', { fallback: 'Website Maintenance &' })} <br />{' '}
        {t('cards.4.1', { fallback: 'Support' })}
      </>
    ),
  },
  {
    icon: KeyboardIcon,
    text: (
      <>
        {t('cards.5.0', { fallback: 'Content Management' })} <br />{' '}
        {t('cards.5.1', { fallback: 'Systems (CMS)' })}
      </>
    ),
  },
  {
    icon: MobileIcon,
    text: <>{t('cards.6', { fallback: 'Mobile-First Design' })}</>,
  },
  {
    icon: DocumentIcon,
    text: <>{t('cards.7', { fallback: 'API Integrations' })}</>,
  },
  {
    icon: DriverIcon,
    text: <>{t('cards.8', { fallback: 'Web Hosting Solutions' })}</>,
  },
  {
    icon: PenToolIcon,
    text: <>{t('cards.9', { fallback: 'UX/UI Design' })}</>,
  },
];

export const WhatWeDo = () => {
  const t = useTranslations('companyOverview.whatWeDo');

  const cards = getCards(t);

  return (
    <section className="relative overflow-hidden bg-[#FFF4E1] py-[60px]">
      <div className="container flex gap-10 max-lg:flex-col">
        <section className="flex w-1/2 flex-col gap-5 max-lg:w-full">
          <Title color="black">{t('title', { fallback: 'What We Do' })}</Title>
          <div className="flex flex-col gap-2">
            <Title as="h3" size="3xl" color="black">
              {t('subtitle', {
                fallback:
                  'Tailored Web Development & Hosting Solutions for Every Website',
              })}
            </Title>
            <Text size="xl" color="black" className="opacity-50">
              {t('text', {
                fallback:
                  'We offer a comprehensive suite of web services, including web development and hosting solutions, designed to meet different website goals and online project requirements. Our services include:',
              })}
            </Text>
            <Text size="xl" color="black" className="opacity-50">
              {t('text2', {
                fallback:
                  'Each solution is carefully crafted to help you build a strong online presence, improve your website’s performance, and grow your online reach. Whether you need reliable hosting or a custom-built website, we’re here to help bring your ideas to life online.',
              })}
            </Text>
          </div>
        </section>
        <section className="grid w-1/2 grid-cols-2 gap-2 max-lg:w-full">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </section>
      </div>
      <Image
        className="absolute -bottom-50 left-40 z-0 opacity-50 max-[1330px]:hidden"
        src="/images/company-overview/world.svg"
        alt="world"
        width={711}
        height={711}
        unoptimized
      />
      <Image
        className="absolute bottom-0 left-0 z-10 h-[134px] w-full object-cover"
        src="/images/company-overview/bb.svg"
        alt="heart"
        width={1440}
        height={134}
        unoptimized
      />
    </section>
  );
};

const Card = ({
  icon: Icon,
  text,
}: {
  icon: () => JSX.Element;
  text: ReactNode;
}) => (
  <article className="flex flex-col gap-4 rounded-[5.217px] bg-[#A4A189] p-4">
    <Icon />
    <Text size="xl" color="solidWhite" weight={700} uppercase>
      {text}
    </Text>
  </article>
);
