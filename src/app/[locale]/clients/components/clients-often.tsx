'use client';


import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import { GreyDot } from '@/shared/ui/components/grey-dot';
import { CmsWorldIcon } from '@/shared/ui/icons/cms-world';
import { EcommerceWorldIcon } from '@/shared/ui/icons/ecommerce';
import { SeoWorldIcon } from '@/shared/ui/icons/seo-world';
import { WPWorldIcon } from '@/shared/ui/icons/wp-world';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';



const getCards = (t: ReturnType<typeof useTranslations>) => [
  { icon: SeoWorldIcon, values: [t('cards.0.values.0', { fallback: 'SEO Strategy' }), t('cards.0.values.1', { fallback: 'Hosting' })] },
  { icon: EcommerceWorldIcon, values: [t('cards.1.values.0', { fallback: 'E-commerce Dev' }), t('cards.1.values.1', { fallback: 'Maintenance' })] },
  { icon: WPWorldIcon, values: [t('cards.2.values.0', { fallback: 'WordPress Setup' }), t('cards.2.values.1', { fallback: 'Ongoing Support' })] },
  { icon: CmsWorldIcon, values: [t('cards.3.values.0', { fallback: 'Custom CMS' }), t('cards.3.values.1', { fallback: 'Training for Their Team' })] },
];

export const ClientsOften = () => {
  const t = useTranslations('clients.clientsOften');
  const cards = getCards(t);

  return (
    <section className="py-20">
      <div className="container flex flex-col gap-[100px] max-md:gap-20">
        <section className="flex flex-col gap-5">
          <Title
            className="max-md:text-[40px] max-md:leading-[130%] max-md:tracking-[1.12px]"
            uppercase
          >
            {t('title', { fallback: 'Add-On Services Most Popular with Customers' })}
          </Title>
          <Text size="xl" className="opacity-30">
            {t('text', { fallback: 'Clients often choose to bundle:' })}
          </Text>
        </section>
        <section className="flex gap-5 max-md:flex-col">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </section>
      </div>
    </section>
  );
};

const Card = ({
  values,
  icon: Icon,
}: {
  values: string[];
  icon: () => JSX.Element;
}) => (
  <article className="relative flex flex-1 flex-col items-center justify-center gap-3.5 rounded-xl border border-[rgba(164,161,137,0.2)] p-6 text-center">
    <GreyDot className="absolute top-6 right-6" />
    <GreyDot className="absolute right-6 bottom-6" />
    <GreyDot className="absolute bottom-6 left-6" />
    <GreyDot className="absolute top-6 left-6" />
    <Icon />
    <Text size="xl" weight={700} className="pb-10">
      {values[0]} <span className="text-primary">+</span>
      <br /> {values[1]}
    </Text>
  </article>
);
