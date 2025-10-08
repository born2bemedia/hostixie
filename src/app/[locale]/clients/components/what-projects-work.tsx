'use client';

import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import { ClipboardIcon } from '@/shared/ui/icons/clipboard';
import { ConvertIcon } from '@/shared/ui/icons/convert';
import { DocumentIcon } from '@/shared/ui/icons/document';
import { FlashIcon } from '@/shared/ui/icons/flash';
import { HeartIcon } from '@/shared/ui/icons/heart';
import { SpacingIcon } from '@/shared/ui/icons/spacing';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getReasons = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: ClipboardIcon,
    text: t('cards.0', { fallback: 'Clear, well-defined scopes' }),
  },
  {
    icon: FlashIcon,
    text: t('cards.1', { fallback: 'Fast, secure hosting' }),
  },
  {
    icon: ConvertIcon,
    text: t('cards.2', { fallback: 'Easy-to-manage backends' }),
  },
  {
    icon: HeartIcon,
    text: t('cards.3', { fallback: 'SEO-friendly structure' }),
  },
  {
    icon: SpacingIcon,
    text: t('cards.4', { fallback: 'Scalable for future growth' }),
  },
  {
    icon: DocumentIcon,
    text: t('cards.5', { fallback: 'Dedicated support & maintenance' }),
  },
];

export const WhatProjectsWork = () => {
  const t = useTranslations('clients.whatProjectsWork');

  return (
    <section className="bg-[#FFF4E1] py-[60px] max-md:py-10">
      <div className="container flex flex-col gap-[48px]">
        <Divider />
        <section className="flex flex-col gap-10">
          <Title
            className="text-[45px] leading-[52.8px] tracking-[-0.48px] max-md:text-[24px] max-md:leading-[120%] max-md:tracking-[-0.48px]"
            weight={500}
            color="black"
          >
            {t('title', { fallback: 'What Makes Hostixie Projects Work' })}
          </Title>
          <section className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            {getReasons(t).map(reason => (
              <Card key={reason.text} icon={reason.icon} text={reason.text} />
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

const Card = ({
  icon: Icon,
  text,
}: {
  icon: () => JSX.Element;
  text: string;
}) => (
  <article className="flex items-center gap-4 rounded-[5.217px] bg-[#A4A189] p-4">
    <Icon />
    <Text size="xl" weight={700}>
      {text}
    </Text>
  </article>
);
