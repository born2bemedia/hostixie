'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const ICONS = [
  '/images/clients/icons/clipboard.svg',
  '/images/clients/icons/people.svg',
  '/images/clients/icons/play-circle.svg',
  '/images/clients/icons/search-status.svg',
  '/images/clients/icons/device-message.svg',
  '/images/clients/icons/brush.svg',
] as const;

export const WhatProjectsWork = () => {
  const t = useTranslations('clients.whatProjectsWork');

  const reasons = ICONS.map((icon, index) => ({
    icon,
    text: t(`cards.${index}`),
  }));

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
            {t('title')}
          </Title>
          <section className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            {reasons.map(reason => (
              <article
                key={reason.text}
                className="flex items-center gap-4 rounded-[5.217px] bg-[#A4A189] p-4"
              >
                <Image
                  src={reason.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                  unoptimized
                />
                <Text size="xl" weight={700} className="uppercase">
                  {reason.text}
                </Text>
              </article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};
