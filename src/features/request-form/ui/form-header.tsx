'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const FormHeader = () => {
  const t = useTranslations('requestForm');

  return (
    <section className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start max-md:gap-2.5">
      <Title
        size="5xl"
        color="black"
        weight={500}
        className="max-w-[511px] leading-[52.8px] tracking-[-0.48px]"
      >
        {t('title')}
      </Title>
      <Text color="black" weight={500} className="w-[289px] max-md:w-full">
        {t('text')}
      </Text>
    </section>
  );
};
