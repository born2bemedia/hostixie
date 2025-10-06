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
        className="leading-[52.8px] tracking-[-0.48px]"
      >
        {t('title.0', { fallback: 'Your Path to Digital' })} <br />
        <span className="text-primary">
          {t('title.1', { fallback: 'Success Begins Here' })}
        </span>
      </Title>
      <Text color="black" weight={500} className="w-[289px] max-md:w-full">
        {t('text', {
          fallback:
            'Please fill out the form below, and our team will contact you to discuss your project and how we can support your digital goals.',
        })}
      </Text>
    </section>
  );
};
